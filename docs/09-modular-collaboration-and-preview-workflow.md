# 模块化协作与预览工作流

## 1. 为什么要模块化协作

Light Flow 后续会继续扩展菜谱、图片、拍照识别、记录、库存和部署流程。如果每次都把所有目标放在同一个长对话里，容易出现几个问题：

- 上下文过长，需求容易被记混。
- 修改范围变宽，可能误改无关页面。
- 设计迭代很多版时，难以判断哪一版是有效版本。
- 每次都正式部署，会影响线上稳定性。
- 后续继续开发时，很难快速恢复某个模块的决策背景。

因此后续建议改成“模块任务制”。

核心原则：

> 每次只改一个主模块，每个模块有自己的文档、Git 分支、预览链接和验收标准。

## 2. 推荐模块拆分

Light Flow 可以按产品和工程边界拆成以下模块：

```text
1. 菜谱图片匹配模块
2. 菜谱数据扩充模块
3. 食材与库存模块
4. 拍照识别模块
5. 今日记录模块
6. 我的/目标设置模块
7. 首页推荐模块
8. 样式系统模块
9. 部署与预览模块
10. Grocy 集成模块
```

每轮任务只允许选择一个主模块。

如果确实需要改公共层，必须在开始前说明：

- 为什么需要改公共层。
- 会影响哪些页面。
- 如何验证没有影响无关模块。

## 3. 推荐代码结构

如果后续迁移到 React + Vite，建议代码结构如下：

```text
src/
  app/
    App.tsx
    routes.tsx
  pages/
    HomePage.tsx
    DiscoverPage.tsx
    IngredientsPage.tsx
    ScanPage.tsx
    LogPage.tsx
    ProfilePage.tsx
  components/
    BottomNav.tsx
    TopBar.tsx
    RecipeCard.tsx
    IngredientPicker.tsx
    Modal.tsx
  data/
    ingredients.ts
    recipes.ts
    recipeDetails.ts
    nutrition.ts
  modules/
    recipes/
    scan/
    log/
    storage/
    grocy/
  styles/
    tokens.css
    globals.css
```

这样每轮任务可以明确影响范围，例如：

```text
本轮影响范围：
- src/pages/ScanPage.tsx
- src/modules/scan/*
- src/modules/storage/*
- src/styles/scan.css
```

## 4. 模块文档

每个核心模块都应该有自己的模块文档。

推荐文件：

```text
docs/modules/recipes.md
docs/modules/recipe-images.md
docs/modules/ingredients.md
docs/modules/scan.md
docs/modules/log.md
docs/modules/profile.md
docs/modules/home.md
docs/modules/styles.md
docs/modules/deploy-preview.md
docs/modules/grocy.md
```

每个模块文档固定包含：

```md
# 模块名称

## 模块目标
## 当前问题
## 本轮允许修改
## 本轮禁止修改
## 依赖模块
## 验收标准
## 预览检查点
## 后续计划
```

模块文档的作用：

- 减少每次对话要重复解释的内容。
- 避免长上下文导致目标漂移。
- 让后续任务可以直接读取对应模块文档继续。
- 让每轮修改有明确边界。

## 5. Git 分支策略

每个模块任务使用独立分支。

推荐命名：

```text
feature/recipe-image-audit
feature/recipe-expansion-100
feature/scan-mvp
feature/react-migration
feature/storage-layer
feature/deploy-preview-workflow
feature/grocy-sync
```

原则：

- `main` 保持正式线上版本。
- 每个功能在自己的 `feature/*` 分支开发。
- 每个分支对应一个 Pull Request。
- Pull Request 生成独立预览链接。
- 确认后再合并到 `main`。

不建议：

- 多个大功能混在同一个分支。
- 小改动直接覆盖正式站。
- 未确认预览效果就合并到 `main`。

## 6. Vercel 预览工作流

当前推荐使用 GitHub + Vercel Preview。

说明：

- Vercel GitHub App 已限制为只访问 `huanghaodong4/Light-Flow` 仓库。
- Netlify 仍保留为历史生产站和备用方案，但当前自动部署受额度限制影响。
- 后续每个模块任务优先通过 Pull Request 生成 Vercel Preview，确认后再合并 `main`。

流程：

```text
模块文档
  ↓
创建 Git 分支
  ↓
实现模块修改
  ↓
本地检查
  ↓
推送到 GitHub
  ↓
打开 Pull Request
  ↓
Vercel 生成 Preview Deployment
  ↓
用户在线查看预览
  ↓
确认后合并 main
  ↓
正式上线
```

好处：

- 每一版都有在线地址。
- 不影响正式站。
- 可以同时比较多个方案。
- GitHub 保留每一版代码历史。
- 后续出问题可以回看对应 Pull Request。

## 7. 每轮任务启动模板

后续每次可以按这个格式发起任务：

```text
本轮任务模块：拍照识别模块

请先读取：
- README.md
- docs/03-ai-agent-instructions.md
- docs/modules/scan.md

目标：
- 上传照片后展示预览
- 显示模拟识别结果
- 支持修改份量
- 确认后写入今日记录

限制：
- 不改发现页
- 不改菜谱数据
- 不改全站样式
- 不部署正式站，只提供预览链接

交付：
- GitHub 分支
- Vercel Preview 链接
- 修改说明
- 验证结果
```

如果是菜谱图片模块：

```text
本轮任务模块：菜谱图片匹配模块

请先读取：
- README.md
- docs/03-ai-agent-instructions.md
- docs/05-recipe-image-and-scan-improvement-plan.md
- docs/modules/recipe-images.md

目标：
- 生成当前菜谱图片审计表
- 标记精确匹配、可接受近似、不合格
- 修复所有明显不对应图片

限制：
- 不扩充新菜谱
- 不改拍照识别
- 不改全站样式

交付：
- 审计文档
- GitHub 分支
- Vercel Preview 链接
- 验证结果
```

## 8. 每轮交付标准

每轮任务完成时必须说明：

- 改了什么。
- 没改什么。
- 影响了哪些文件。
- 本地验证结果。
- 预览链接。
- 是否合并正式站。

推荐交付格式：

```text
本轮完成：拍照识别模块 MVP

修改范围：
- src/pages/ScanPage.tsx
- src/modules/scan/*
- src/modules/storage/*

未修改：
- 发现页
- 菜谱数据
- 我的页

验证：
- 本地构建通过
- 上传预览流程可用
- 识别结果可编辑
- 今日记录写入正常

预览链接：
- Vercel Preview: ...

状态：
- 等待确认，不合并 main
```

## 9. 避免上下文过长的规则

后续协作时优先依赖文档和代码，而不是依赖长聊天记录。

规则：

- 每轮任务先读 README 和 AI 指令。
- 再读当前模块文档。
- 如果任务涉及技术路线，再读 `docs/08-next-stage-technical-design.md`。
- 如果任务涉及图片和菜谱，再读 `docs/05-recipe-image-and-scan-improvement-plan.md`。
- 如果任务涉及拍照识别，再读 `docs/07-photo-food-recognition-and-calorie-plan.md`。
- 如果任务涉及 Grocy，再读 `docs/06-grocy-integration-notes.md`。

不要在一个任务里同时处理太多模块。

如果出现新想法，先记录到文档，不一定马上实现。

## 10. 最终建议

Light Flow 后续稳定迭代的关键不是一次性大改，而是建立稳定的协作机制：

- 模块边界清晰。
- 每个模块有文档。
- 每个任务有分支。
- 每个分支有预览链接。
- 每次修改有验收标准。
- 正式站只在确认后更新。

这样即使项目变大、对话变长、设计版本变多，也能保持清晰、可预览、可回退。
