# Light Flow 下一阶段技术设计

## 1. 设计目标

Light Flow 已经有可运行的原型。下一阶段的技术设计目标不是重新做一个产品，而是在保留当前轻食助手定位的基础上，让项目更适合长期迭代。

核心目标：

- 保持移动端优先体验。
- 让前端结构更容易维护。
- 让菜谱、食材、营养和识别数据更清晰。
- 支持拍照识别和热量估算。
- 控制 AI token 和调用成本。
- 支持多版本设计和在线预览，不要求每次都正式上线。

## 2. 当前问题

当前项目已经能展示主要页面，但后续继续扩展时会遇到几个问题：

- `app.js` 承担了过多页面、数据和交互逻辑。
- 菜谱数量增加后，静态数据维护会变复杂。
- 拍照识别需要多状态流程，单页字符串拼接不够好维护。
- 用户数据目前依赖本地状态，需要明确存储边界。
- 每次修改都直接部署正式站，不适合大量设计迭代。
- AI 识别如果不控制输入和输出，会产生不必要 token 成本。

## 3. 前端架构

推荐下一阶段使用：

```text
React + Vite
```

原因：

- React 适合把首页、发现页、食材页、拍照页、记录页拆成独立组件。
- Vite 构建轻量，适合当前静态站和 Netlify 部署。
- 拍照识别、识别中、结果校正、写入记录等复杂状态更容易管理。
- 后续接图表、上传、表单和预览链接也更方便。

暂时不建议使用 Next.js。

原因：

- 当前项目不是内容站，也不依赖复杂服务端渲染。
- 还没有账号系统和大型服务端数据需求。
- Next.js 会让第一阶段改造变重。

推荐前端技术组合：

```text
React
Vite
React Router
Zustand
CSS Variables 或 CSS Modules
```

职责划分：

- React：页面和组件。
- Vite：开发和构建。
- React Router：页面路由。
- Zustand：全局状态，例如已选食材、收藏、记录、拍照识别结果。
- CSS Variables 或 CSS Modules：局部样式和设计变量。

暂时不建议：

- Redux：当前阶段太重。
- 大型 UI 组件库：容易让产品变成后台系统风格。
- 全面改 Tailwind：当前已有视觉风格，不适合第一阶段重写样式体系。

## 4. 前端设计工具与迭代方式

推荐使用 Figma 做设计协作，但不建议直接把 Figma 生成的代码作为最终代码。

Figma 适合承担：

- 首页、发现页、拍照页、记录页等页面设计。
- 多版本设计探索。
- 移动端交互原型。
- 颜色、字号、间距、组件规范。
- 设计评审和版本对比。
- 给开发提供尺寸、变量和资源。

Light Flow 的推荐设计到开发流程：

```text
Figma 设计稿
  ↓
确认某一版
  ↓
React 组件实现
  ↓
Git 分支
  ↓
在线预览链接
  ↓
确认后合并并正式上线
```

原则：

- Figma 管设计方案和视觉迭代。
- React/Vite 管真实产品实现。
- 不直接照搬 Figma 自动生成代码。
- 不因为设计迭代而重新设计全站。
- 新页面必须保持 Light Flow 的移动端轻食体验。

## 5. 样式系统

样式系统目标是让页面越做越多时仍然统一。

推荐方式：

- 保持移动端优先。
- 建立基础设计变量。
- 页面级样式和组件级样式分开。
- 卡片、按钮、标签、底部导航、弹窗、表单等组件复用统一风格。
- 拍照识别页也要保持 Light Flow 视觉语言，不做成突兀的 AI 工具页。

基础设计变量包括：

- 主色
- 辅助色
- 背景色
- 字号
- 行高
- 间距
- 圆角
- 阴影
- 卡片边框

不建议：

- 为每个页面重新创造一套样式。
- 引入大型 UI 库后覆盖当前风格。
- 因为局部页面改版导致全站视觉漂移。

## 6. 数据储存

第一阶段推荐继续使用：

```text
localStorage
```

适合存储：

- 已选食材
- 收藏菜谱
- 每日摄入记录
- 个人目标
- 拍照识别后的确认记录
- 最近一次识别结果摘要

不适合存储：

- 原始大图
- 大量历史图片
- API Key
- 敏感服务端配置

推荐数据分层：

```text
静态数据：菜谱、食材、营养表、图片路径
用户数据：localStorage
AI 识别：Netlify Function
未来同步：Supabase 作为候选
外部库存：Grocy 作为候选数据源
```

静态数据后续可以从 `app.js` 拆成独立文件，例如：

```text
src/data/ingredients.ts
src/data/recipes.ts
src/data/nutrition.ts
src/data/recipeDetails.ts
```

用户数据建议统一封装 storage 层，不要在各个组件里直接散落读写 localStorage。

未来如果需要账号、多设备同步和云端数据，可以考虑 Supabase，但不建议第一阶段就引入。

## 7. AI 与 Token 成本控制

AI 应该只做本地代码做不了或做不好的事情。

原则：

- 不把整个菜谱库每次都发给 AI。
- 不让 AI 自由生成所有营养数据。
- 不让 AI 每次处理过大的图片。
- 不让 AI 做本地代码能完成的计算。
- 不让 AI 输出长篇解释。

拍照识别推荐分工：

```text
视觉模型：识别食物和估算份量
Light Flow：根据营养表计算热量和三大营养素
用户：确认和修正结果
```

控制方式：

- 图片上传前压缩。
- 只传必要食材字段，例如 `id`、中文名、类别。
- 输出格式固定为 JSON。
- 低置信度结果交给用户确认，不反复调用模型。
- 常见识别结果可以缓存。
- 营养计算使用本地营养表完成。

## 8. 部署与预览工作流

当前预览工作流推荐使用：

```text
GitHub + Vercel Preview
```

当前正式站状态：

```text
Netlify 历史生产站：https://light-flow-fit.netlify.app
Vercel 生产地址：https://light-flow.vercel.app/
```

预览版本：

```text
feature 分支
  ↓
Pull Request
  ↓
Vercel Preview Deployment
  ↓
临时在线预览地址
```

这样可以实现：

- 每个功能一个分支。
- 每个 Pull Request 一个在线预览链接。
- 设计和功能可以多版并行。
- 用户可以先在线查看，不满意就继续改。
- 满意后再合并到 `main` 并正式上线。

推荐分支示例：

```text
main
feature/recipe-image-fix
feature/scan-mvp
feature/react-migration
feature/grocy-sync
```

原则：

- 小改动不一定直接部署正式站。
- 重要改动先走预览链接。
- 正式站只在确认后更新。
- GitHub 保存每一版代码历史。
- Vercel 提供每个 Pull Request 的可浏览预览地址。
- Netlify 额度恢复后可继续作为备用预览或生产部署方案。

## 9. 模块化协作机制

为了避免后续上下文过长、需求混在一起、修改范围失控，Light Flow 后续建议采用模块任务制。

核心原则：

- 每次只改一个主模块。
- 每个模块有自己的模块文档。
- 每个模块任务使用独立 Git 分支。
- 每个 Pull Request 生成独立 Vercel Preview 链接。
- 正式站只在确认后更新。
- 后续任务优先读取模块文档和代码，不依赖长聊天记录。

推荐模块：

```text
菜谱图片匹配模块
菜谱数据扩充模块
食材与库存模块
拍照识别模块
今日记录模块
我的/目标设置模块
首页推荐模块
样式系统模块
部署与预览模块
Grocy 集成模块
```

详细规则见：

```text
docs/09-modular-collaboration-and-preview-workflow.md
```

## 10. 部署结构

当前阶段：

```text
Browser
  ↓
Static Frontend on Netlify
  ↓
localStorage
```

拍照识别阶段：

```text
Browser
  ↓ 上传图片
Netlify Function
  ↓ 调用视觉模型
OpenAI 或其他视觉 API
  ↓ 返回结构化识别结果
Light Flow 前端
  ↓ 用户校正
localStorage
```

API Key 必须放在 Netlify 环境变量中，不能放在前端代码里。

## 11. 分阶段实施计划

### 第一阶段：内容可信度

- 生成菜谱图片审计表。
- 修复图文不一致菜谱。
- 扩充菜谱到 90-100 道。
- 补齐 6 步跟做说明。

### 第二阶段：前端结构升级

- 引入 React + Vite。
- 拆分页面组件。
- 拆分食材、菜谱、营养数据。
- 封装 localStorage 数据层。

### 第三阶段：拍照识别 MVP

- 拍照页改为上传、预览、识别中、结果校正、写入记录流程。
- 先用模拟数据打通体验。
- 再接 Netlify Function 和视觉模型。

### 第四阶段：设计迭代与预览工作流

- 使用 Figma 做多版设计。
- 每个功能走 Git 分支。
- 每个 Pull Request 使用 Vercel Preview。
- 确认后再正式上线。

### 第五阶段：外部能力集成

- 评估 Grocy 作为外部库存来源。
- 评估 Supabase 作为未来账号和云同步方案。
- 不在第一阶段引入重型后端。

## 12. 不做什么

下一阶段不做：

- 不直接照搬 Grocy 代码。
- 不直接照搬 Figma 自动生成代码。
- 不重构成大型后台系统。
- 不引入大型 UI 组件库。
- 不把 API Key 放到前端。
- 不把原始大图长期存进 localStorage。
- 不让 AI 完全自由生成营养数据。
- 不每次小改都直接更新正式站。
- 不为了技术升级重新设计全站。

## 13. 最终技术路线

推荐路线：

```text
设计：Figma
前端：React + Vite
路由：React Router
状态：Zustand
样式：CSS Variables / CSS Modules
本地储存：localStorage
AI 后端：Netlify Functions
版本管理：GitHub
预览发布：Vercel Preview
正式发布：确认后再更新生产站
未来云同步：Supabase 候选
未来库存集成：Grocy 候选
```

这条路线的重点是：

- 用 React 让项目更容易长大。
- 用 localStorage 保持第一阶段轻量。
- 用 Netlify Function 安全接 AI。
- 用 Figma 支持多版设计。
- 用 GitHub 和 Vercel Preview 支持多版本在线浏览。
- 正式站只在确认后更新。
