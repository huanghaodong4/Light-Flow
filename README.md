# 轻食谱 Light Flow

轻食谱是一个移动端优先的轻食菜谱 Web App。它根据用户冰箱里的食材和库存，推荐当前能做的菜谱，并支持每日摄入记录、基础代谢估算、食材图标审核和菜谱图片库管理。

线上地址：https://light-flow-fit.netlify.app

## 快速入口

- 产品和需求文档：`docs/`
- 应用入口：`index.html`
- 主要逻辑：`app.js`
- 样式：`styles.css`
- 食材图标：`assets/ingredient-icons/`
- 图标生成脚本：`scripts/generate-ingredient-icons.mjs`
- 菜谱图片库：`lightflow-food-image-database/`
- 页面验证截图：`verification/`

## 文档

- `docs/00-research-summary.md`：产品研究摘要和用户反馈沉淀。
- `docs/01-product-requirements.md`：产品需求文档。
- `docs/02-technical-design.md`：技术设计文档。
- `docs/03-ai-agent-instructions.md`：后续 AI 代理执行指令。
- `docs/04-folder-inventory.md`：当前文件夹结构说明。
- `docs/05-recipe-image-and-scan-improvement-plan.md`：菜谱图片、菜谱扩充和拍照识别改进方案。
- `docs/06-grocy-integration-notes.md`：Grocy 与 Light Flow 结合方式说明。
- `docs/07-photo-food-recognition-and-calorie-plan.md`：拍照识别食物与热量估算方案。
- `docs/08-next-stage-technical-design.md`：下一阶段技术设计。
- `docs/09-modular-collaboration-and-preview-workflow.md`：模块化协作与预览工作流。
- `docs/10-current-state-audit.md`：重新开工前项目现状盘点。
- `docs/11-recipe-image-audit.md`：当前菜谱图片匹配审计表。
- `docs/12-phase-1-roadmap.md`：第一阶段内容可信度路线图。
- `docs/modules/`：各模块边界、验收标准和预览检查点。

## 常用操作

生成食材图标：

```bash
node scripts/generate-ingredient-icons.mjs
```

检查代码语法：

```bash
node --check app.js
node --check scripts/generate-ingredient-icons.mjs
```

部署上线：

```bash
npx netlify-cli deploy --prod --dir=. --site 5f5567f0-341d-4805-aacd-597370af3e9d
```

## 内容维护原则

- 新增食材必须有中文名、分类、单位和独立图标。
- 食材图标优先保证准确识别，再保证风格统一。
- 新增菜谱必须使用已有食材 ID，并尽量匹配真实图片。
- 菜谱详情应保持 6 步跟做说明。
- 部署前至少运行语法检查和图标完整性检查。
