# 轻食谱技术设计文档

## 1. 技术概览

当前项目是一个静态移动端 Web App。

核心文件：

- `index.html`：页面入口。
- `styles.css`：全部样式。
- `app.js`：数据、状态、路由、渲染、交互逻辑。
- `assets/ingredient-icons/`：食材 SVG 图标资产。
- `scripts/generate-ingredient-icons.mjs`：食材图标生成脚本。
- `lightflow-food-image-database/`：菜谱图片库。

部署方式：

- 静态资源部署到 Netlify。
- 生产地址：https://light-flow-fit.netlify.app

## 2. 前端架构

当前没有使用 React/Vue 等框架，采用原生 JavaScript 字符串模板渲染。

渲染流程：

1. 读取 `location.hash` 得到当前页面。
2. `render()` 生成整个 `app` HTML。
3. `pageTemplate()` 根据页面名返回对应页面模板。
4. `bindEvents()` 绑定所有按钮、输入框和卡片事件。
5. 状态变化后调用 `saveState()` 和 `render()`。

当前页面：

- `#/home`
- `#/discover`
- `#/ingredients`
- `#/scan`
- `#/log`
- `#/profile`

## 3. 数据模型

### 3.1 Ingredient

食材对象建议保持以下结构：

```js
{
  id: "chicken-breast",
  name: "鸡胸肉",
  group: "高蛋白",
  image: "./assets/ingredients/chicken-breast.jpg",
  icon: "./assets/ingredient-icons/chicken-breast.svg"
}
```

要求：

- `id` 是稳定主键。
- `name` 是用户可见中文名。
- `group` 用于分类筛选。
- `icon` 必须由 `ingredientIconBasePath` 按 ID 生成。

### 3.2 Recipe

菜谱对象通过 `recipe()` 工厂函数生成。

```js
{
  id,
  name,
  required,
  kcal,
  protein,
  carbs,
  fat,
  time,
  score,
  desc,
  image,
  mealTypes,
  steps,
  amounts
}
```

说明：

- `required` 是食材 ID 数组。
- `amounts` 是食材 ID 到用量的映射。
- `mealTypes` 决定可加入哪些餐次。
- `steps` 可以是基础步骤，最终展示由 `getRecipeCookingSteps()` 生成 6 步。

### 3.3 Pantry

库存对象以食材 ID 为 key。

```js
{
  "chicken-breast": {
    quantity: 300,
    unit: "g"
  }
}
```

库存用于：

- 判断菜谱是否可做。
- 加入记录后扣减食材。
- 食材页显示库存。

### 3.4 Day Log

饮食记录按日期和餐次保存。

```js
{
  "2026-07-15": {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: []
  }
}
```

## 4. 本地状态

状态保存在浏览器 `localStorage`，核心内容包括：

- 用户资料。
- 目标热量调整。
- 冰箱库存。
- 每日饮食记录。
- 已选食材。
- 随机菜谱历史。

设计原则：

- 所有状态必须可从默认值恢复。
- `loadState()` 需要容错，避免坏数据导致页面崩溃。
- `saveState()` 只保存必要字段，避免缓存无关临时数据。

## 5. 菜谱匹配逻辑

匹配过程：

1. 获取库存数量大于 0 的食材。
2. 对每道菜谱计算已匹配食材和缺失食材。
3. 按缺失数量升序排序。
4. 缺失数量相同，按匹配数量降序。
5. 再按推荐分降序。

结果分两类：

- `ready`：所有 required 食材都已拥有。
- `near`：缺少部分食材，但接近可做。

## 6. 食材图标系统

图标生成脚本：

- 路径：`scripts/generate-ingredient-icons.mjs`
- 输出：`assets/ingredient-icons/*.svg`
- 总览页：`assets/ingredient-icons/contact-sheet.html`
- 清单：`assets/ingredient-icons/manifest.json`

新增或修改食材图标流程：

1. 修改 `scripts/generate-ingredient-icons.mjs` 中的食材列表或模板。
2. 执行 `node scripts/generate-ingredient-icons.mjs`。
3. 打开 `assets/ingredient-icons/contact-sheet.html` 人工审核。
4. 检查 `app.js` 中食材 ID 与图标文件一一对应。
5. 部署前确认线上关键图标返回 `200`。

验收命令：

```bash
node --check app.js
node --check scripts/generate-ingredient-icons.mjs
node -e 'const fs=require("fs"); const code=fs.readFileSync("app.js","utf8"); const ids=[...code.matchAll(/id: "([^"]+)", name:/g)].map(m=>m[1]); const missing=ids.filter(id=>!fs.existsSync("assets/ingredient-icons/"+id+".svg")); console.log({count:ids.length, missing}); if (missing.length) process.exit(1);'
```

## 7. 菜谱步骤生成

详情页最终展示步骤来自：

- `formatRecipeAmountList(recipe)`
- `getRecipeCookingSteps(recipe)`
- `getRecipePrepNote(recipe)`
- `getRecipeCookingProfile(recipe)`

当前策略：

- 使用菜谱基础步骤和菜谱类型模板组合。
- 最终限制为 6 步。
- 根据早餐碗、吐司、汤、沙拉、碗饭等类型生成不同口吻。

后续优化：

- 重要菜谱应维护人工步骤。
- 增加火候、时间、判断标准。
- 增加替换食材建议。

## 8. 图片资产

菜谱图使用本地图片库，主要来源：

- `lightflow-food-image-database/Chinese-Food`
- `lightflow-food-image-database/Western-Food`
- `lightflow-food-image-database/Healthy-Light-Meals`

要求：

- 菜谱图必须尽量对应菜名。
- 不使用缺失路径。
- 不把同一张图过度复用到明显不同的菜谱。

## 9. 部署

当前 Netlify 站点：

- Site ID: `5f5567f0-341d-4805-aacd-597370af3e9d`
- Production URL: `https://light-flow-fit.netlify.app`

部署命令：

```bash
npx netlify-cli deploy --prod --dir=. --site 5f5567f0-341d-4805-aacd-597370af3e9d
```

部署后检查：

```bash
curl -I https://light-flow-fit.netlify.app/app.js
curl -I https://light-flow-fit.netlify.app/assets/ingredient-icons/contact-sheet.html
curl -I https://light-flow-fit.netlify.app/assets/ingredient-icons/chicken-breast.svg
```

## 10. 技术债

- `app.js` 过大，数据、模板、状态和事件绑定混在一个文件。
- 菜谱数据适合拆成 JSON 或模块。
- 图标模板和食材列表重复维护，长期可拆成配置。
- 没有自动化测试。
- 没有构建流程，所有静态资源直接部署。
- 拍照识别目前偏模拟，需要真实识别方案。

## 11. 推荐重构方向

短期：

- 拆分 `data/ingredients.js`、`data/recipes.js`、`lib/matching.js`、`lib/nutrition.js`。
- 增加 `scripts/validate-content.mjs`，检查食材、图标、菜谱图片、用量。
- 增加 README 和部署说明。

中期：

- 引入轻量构建工具，例如 Vite。
- 将菜谱、食材、图标清单改成可编辑 JSON。
- 增加 Playwright 关键路径验证。

