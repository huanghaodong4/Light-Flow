# Light Flow 当前项目现状盘点

盘点日期：2026-07-16

## 1. 盘点目的

本文件用于记录重新开始修改 Light Flow 前的项目基线，避免后续改造时只依赖长聊天上下文。

后续每个模块任务开始前，可以先读本文件了解当前状态。

## 2. 当前项目形态

当前项目是一个静态前端 Web App。

主要文件：

```text
index.html
app.js
styles.css
assets/
lightflow-food-image-database/
verification/
docs/
```

当前实现特点：

- `app.js` 同时包含食材数据、菜谱数据、页面渲染、状态管理和交互逻辑。
- `styles.css` 包含全站样式。
- 用户状态主要通过浏览器本地存储维护。
- 拍照识别页目前主要是上传入口和说明，还没有真实识别闭环。
- 菜谱图片库已经存在，但菜谱和图片之间还需要审计。

## 3. 当前数量统计

基于 `app.js` 和 `lightflow-food-image-database/` 的当前盘点：

| 项目 | 当前数量 | 说明 |
|---|---:|---|
| 菜谱条目 | 50 | 通过 `recipe(...)` 调用统计 |
| 顶部食材条目 | 24 | 通过 `ingredients` 数组统计 |
| 菜谱使用的唯一图片 | 47 | 有 3 张图片被多个菜谱复用 |
| 图库文件总数 | 161 | 包含 CSV、报告等非图片文件 |
| 图库图片文件 | 156 | `.jpg/.jpeg/.png/.webp` |

## 4. 发现的关键问题

### 4.1 当前目录不是 Git 仓库

在当前工作目录执行 Git 状态检查时返回：

```text
fatal: not a git repository (or any of the parent directories): .git
```

说明当前本地目录还不能直接执行分支、提交、Pull Request 和 Deploy Preview 工作流。

后续要实现 GitHub + Netlify Deploy Preview，需要先确认：

- GitHub 仓库是否已经存在。
- 当前目录是否需要 `git init` 或重新关联远程仓库。
- Netlify 是否已经连接 GitHub 仓库。
- `main` 分支是否对应正式站。

### 4.2 菜谱数量不足以支撑丰富体验

当前代码统计到 50 道菜谱。用户感知中希望扩到更丰富的规模，建议第一阶段目标是 90-100 道。

扩充前必须先修复图文不一致，否则新增菜谱会继续放大信任问题。

### 4.3 食材数据存在不一致

当前顶部 `ingredients` 数组只有 24 个食材，但菜谱引用了更多食材 ID。

菜谱引用但未出现在顶部食材列表中的 ID 包括：

```text
bok-choy
white-rice
tuna
chickpea
quinoa
cauliflower
potato
kiwi
blueberry
strawberry
milk
zucchini
noodles
peanut
pasta
cheese
pumpkin
green-onion
asparagus
chicken-thigh
scallop
```

后续需要确认这些食材是否在其他位置补充过。如果没有，需要统一食材数据来源，避免菜谱匹配、份量展示和图标展示出现不一致。

### 4.4 菜谱图片存在明显不匹配风险

当前已有若干明显风险，例如：

- 豆腐西兰花胡萝卜煲使用了麻婆豆腐图片。
- 牛肉蘑菇糙米饭使用了牛肉面图片。
- 菠菜蘑菇炒蛋使用了蛋炒饭图片。
- 番茄三文鱼菠菜汤使用了南瓜汤图片。

详细审计见：

```text
docs/11-recipe-image-audit.md
```

### 4.5 菜谱步骤目前依赖生成函数补成 6 步

`recipeDetails` 中多数菜谱手写步骤为 4 条，但页面显示时通过 `getRecipeCookingSteps(recipe)` 生成 6 步：

```text
备料
预处理
处理
烹饪
调味收尾
出餐判断
```

这能满足展示层的 6 步，但后续如果要提升跟做质量，仍建议把每道菜的核心步骤写得更具体。

### 4.6 拍照识别还是占位功能

当前拍照页主要包含：

- 上传餐食照片按钮。
- 拍照提示。
- 俯拍、避免遮挡、结果可调整的说明。

还没有：

- 图片预览。
- 识别中状态。
- 识别结果列表。
- 份量编辑。
- 营养计算。
- 写入今日记录。

后续拍照识别方案见：

```text
docs/07-photo-food-recognition-and-calorie-plan.md
```

## 5. 当前可用资产

图片库当前已有较多可用素材：

- Healthy-Light-Meals
- Western-Food
- Chinese-Food
- review-needed
- duplicates

图库报告显示可用图片素材基础已经存在，后续应优先从图片反推菜谱，避免继续写出没有合适图片的菜谱。

## 6. 当前验证结果

已执行：

```bash
node --check app.js
```

结果：通过，无语法错误输出。

## 7. 重新开工前建议

建议按以下顺序继续：

1. 先确认 GitHub 仓库和 Netlify Deploy Preview 工作流。
2. 基于 `docs/11-recipe-image-audit.md` 修复图文不一致菜谱。
3. 统一食材数据，处理菜谱引用但顶部食材列表缺失的 ID。
4. 再扩充菜谱到 90-100 道。
5. 最后再推进拍照识别 MVP 和 React/Vite 改造。

