# Light Flow 文件夹清单

## 根目录文件

- `README.md`：项目入口说明，适合先打开。
- `index.html`：网页入口文件，加载样式和脚本。
- `app.js`：应用主逻辑，包含食材、菜谱、状态、页面渲染、事件绑定。
- `styles.css`：全站样式，移动端视觉和布局都在这里。
- `package.json` / `package-lock.json`：Node 依赖和脚本配置。
- `.netlify/`：Netlify 站点配置和站点 ID。
- `.netlifyignore`：部署时忽略规则。
- `.gitignore`：本地忽略规则。
- `MCP_IMAGE_TOOLS.md`：图片工具相关说明。
- `mcp-image-tools.config.example.json`：图片工具配置示例。

## docs/

项目文档目录。

- `00-research-summary.md`：产品研究摘要。
- `01-product-requirements.md`：产品需求文档。
- `02-technical-design.md`：技术设计文档。
- `03-ai-agent-instructions.md`：AI 代理执行指令。
- `04-folder-inventory.md`：当前文件夹清单。

## assets/

应用直接使用的静态资源。

- `assets/brand/`：品牌 Logo、favicon、touch icon。
- `assets/ingredients/`：早期食材照片资源。
- `assets/ingredient-icons/`：当前食材 SVG 图标库。
- `assets/ingredient-icons/contact-sheet.html`：食材图标审核总览页。
- `assets/ingredient-icons/manifest.json`：食材图标清单。
- `assets/recipes/`：菜谱图片、联系表、图片库工作文件和备份。

## scripts/

项目维护脚本。

- `generate-ingredient-icons.mjs`：生成 78 个食材 SVG 图标、图标清单和审核总览页。

## lightflow-food-image-database/

菜谱图片数据库。

- `Chinese-Food/`：中式菜品图片。
- `Western-Food/`：西式菜品图片。
- `Healthy-Light-Meals/`：轻食图片。
- `duplicates/`：重复或备选图片。
- `review-needed/`：需要人工复核的图片。
- `IMAGE_LIBRARY_REPORT.md`：图片库报告。
- `image-library.csv`：图片库索引。
- `image-library-report.json`：图片库报告数据。

## verification/

验证和截图资料。

- 首页、发现页、记录页、个人页、拍照页等移动端验证截图。
- `iteration-screenshots/`：迭代过程中的临时截图，包含食材图标、步骤页等检查截图。

## audit-light-flow-fit-2026-07-13/

早期页面审计资料。

- 桌面和移动端截图。
- 点击路径结果。
- 控制台日志。
- DOM 和交互摘要。

## node_modules/

本地依赖目录。体积较大，不需要人工编辑，也不应部署为产品内容。

## 当前重点内容

- 当前应用核心在 `app.js` 和 `styles.css`。
- 当前食材图标以 `assets/ingredient-icons/` 为准，不以旧的 `assets/ingredients/` 照片为准。
- 后续 AI 或开发人员应先读 `README.md` 和 `docs/03-ai-agent-instructions.md`，再动代码。

