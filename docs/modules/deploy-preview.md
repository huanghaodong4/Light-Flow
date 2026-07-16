# 部署与预览模块

## 模块目标

建立 GitHub + Netlify Deploy Preview 工作流，让每个功能分支都有在线预览链接，正式站只在确认后更新。

## 当前问题

当前工作目录此前执行 Git 状态检查时显示：

```text
fatal: not a git repository (or any of the parent directories): .git
```

因此此前本地目录还不能直接执行分支、提交、PR 和预览链接流程。

已确认的远程信息：

```text
GitHub 仓库：https://github.com/huanghaodong4/Light-Flow
默认分支：main
Netlify 站点：https://light-flow-fit.netlify.app
Netlify 项目：light-flow-fit
Netlify Site ID：5f5567f0-341d-4805-aacd-597370af3e9d
Vercel 项目：https://vercel.com/huanghaodong4s-projects/light-flow
Vercel 生产地址：https://light-flow.vercel.app/
```

当前注意事项：

- GitHub 远程 `main` 当前更像是构建产物快照，包含 `assets/index-*.js/css` 等文件。
- 本地目录是更完整的源项目，包含 `app.js`、`styles.css`、`docs/`、`scripts/`、图片库和验证资料。
- 不应直接覆盖远程 `main`，建议先把本地源项目推到独立基线分支，再通过 PR 或仓库设置切换正式开发流。
- Netlify 已连接 GitHub，但当前自动部署被团队额度限制跳过，错误为 `Skipped due to account credit usage exceeded`。
- Vercel 已作为免费预览替代方案连接到 GitHub 仓库；当前 Vercel 生产部署来自 `main` 的 `11a20ad`，不是源码基线 PR。
- PR #1 `source/baseline-static-app-pr` 用于验证源码基线和预览流程，不应直接合并。

## 本轮允许修改

- 部署与预览相关文档。
- GitHub/Netlify/Vercel 工作流说明。
- 必要时补充配置文件，但需先确认当前仓库状态。

## 本轮禁止修改

- 不直接正式部署。
- 不改产品代码。
- 不删除 Netlify 配置。
- 不创建破坏性 Git 操作。

## 需要用户确认

在真正启用预览工作流前，需要确认：

- GitHub 仓库地址。
- 当前目录是否应初始化为 Git 仓库。
- 是否已有远程仓库。
- Netlify 或 Vercel 是否已经连接该仓库。
- `main` 分支是否对应正式站。
- 是否将 Vercel 作为后续主要预览平台，还是仅作为 Netlify 额度恢复前的临时替代。

## 推荐流程

```text
source/baseline-static-app 基线分支
  ↓
确认 GitHub 源码基线
  ↓
连接 Netlify 或 Vercel 到 GitHub 仓库
  ↓
设置生产分支和发布目录
  ↓
feature 分支
  ↓
Pull Request
  ↓
Deploy Preview
  ↓
用户查看预览
  ↓
确认后合并 main
  ↓
正式站更新
```

## Vercel 临时预览流程

在 Netlify 额度恢复前，可以使用 Vercel 生成 PR Preview。

当前 Vercel 设置：

```text
项目：light-flow
仓库：huanghaodong4/Light-Flow
Framework Preset：Other
Root Directory：./
Build Command：空
Output Directory：空
生产地址：https://light-flow.vercel.app/
```

注意：

- Vercel 首次导入时选择的是 `main`，因此生产地址目前展示的是远程 `main` 上的旧构建产物。
- PR #1 需要新的分支提交或 PR 事件来触发 Vercel Preview。
- 预览生成后，应优先检查 PR 页面右侧 Deployments 或 Checks 区域，而不是直接看生产地址。
- 后续建议把 Vercel GitHub App 权限限制为仅 `huanghaodong4/Light-Flow` 仓库。

## 验收标准

- 能创建功能分支。
- 能推送到 GitHub。
- Pull Request 能生成 Netlify 或 Vercel 预览链接。
- 预览链接不影响正式站。
- 正式站只在确认后更新。

## 后续计划

- 确认 PR #1 是否能生成 Vercel Preview。
- 如 Vercel Preview 正常，后续功能分支可优先使用 Vercel Preview。
- 如仍需 Netlify，待额度恢复后再验证 Netlify Deploy Preview。
