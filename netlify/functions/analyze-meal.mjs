const schema = {
  type: "object",
  additionalProperties: false,
  required: ["dishName", "components", "protein", "carbs", "fat", "notes"],
  properties: {
    dishName: { type: "string" },
    components: {
      type: "array",
      minItems: 1,
      maxItems: 12,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["name", "grams", "kcal", "confidence"],
        properties: {
          name: { type: "string" },
          grams: { type: "number", minimum: 0, maximum: 2000 },
          kcal: { type: "number", minimum: 0, maximum: 5000 },
          confidence: { type: "string", enum: ["高", "中", "低"] },
        },
      },
    },
    protein: { type: "number", minimum: 0, maximum: 500 },
    carbs: { type: "number", minimum: 0, maximum: 1000 },
    fat: { type: "number", minimum: 0, maximum: 500 },
    notes: { type: "string" },
  },
};

export default async (request) => {
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });
  if (!process.env.OPENAI_API_KEY) {
    return Response.json({ error: "识别服务尚未配置，当前照片不会被假装识别。需要先在 Netlify 配置 OPENAI_API_KEY。" }, { status: 503 });
  }

  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "请求内容不是有效的图片数据。" }, { status: 400 });
    }
    const { image } = body;
    if (typeof image !== "string" || !image.startsWith("data:image/") || image.length > 8_000_000) {
      return Response.json({ error: "照片格式不支持或文件过大，请重新拍摄。" }, { status: 400 });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_VISION_MODEL || "gpt-5-mini",
        messages: [{
          role: "user",
          content: [
            {
              type: "text",
              text: "你是谨慎的餐食图片分析助手。只根据照片中真正可见的内容识别菜品和食材，估算每项可食部分克数、千卡及整餐蛋白质/碳水/脂肪。看不清的食材不要臆测为确定答案，使用低置信度并在 notes 说明；油、酱汁等不可见成分只能标记为估算。所有名称和说明使用简体中文。",
            },
            { type: "image_url", image_url: { url: image, detail: "high" } },
          ],
        }],
        response_format: {
          type: "json_schema",
          json_schema: { name: "meal_analysis", strict: true, schema },
        },
      }),
      signal: AbortSignal.timeout(45000),
    });

    const payload = await response.json();
    if (!response.ok) throw new Error(payload?.error?.message || "视觉模型请求失败");
    const content = payload?.choices?.[0]?.message?.content;
    if (!content) throw new Error("视觉模型没有返回可用结果");
    return Response.json(JSON.parse(content), { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("meal analysis failed", error);
    if (error instanceof DOMException && error.name === "TimeoutError") {
      return Response.json({ error: "识别服务响应超时，请稍后重试。" }, { status: 504 });
    }
    return Response.json({ error: "没有得到可靠的识别结果，请换一张清晰、完整的餐盘照片再试。" }, { status: 502 });
  }
};

export const config = { path: "/.netlify/functions/analyze-meal" };
