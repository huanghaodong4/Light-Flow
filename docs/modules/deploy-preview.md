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
```

当前注意事项：

- GitHub 远程 `main` 当前更像是构建产物快照，包含 `assets/index-*.js/css` 等文件。
- 本地目录是更完整的源项目，包含 `app.js`、`styles.css`、`docs/`、`scripts/`、图片库和验证资料。
- 不应直接覆盖远程 `main`，建议先把本地源项目推到独立基线分支，再通过 PR 或仓库设置切换正式开发流。

## 本轮允许修改

- 部署与预览相关文档。
- GitHub/Netlify 工作流说明。
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
- Netlify 是否已经连接该仓库。
- `main` 分支是否对应正式站。

## 推荐流程

```text
source/baseline-static-app 基线分支
  ↓
确认 GitHub 源码基线
  ↓
连接 Netlify 到 GitHub 仓库
  ↓
设置生产分支和发布目录
  ↓
feature 分支
  ↓
Pull Request
  ↓
Netlify Deploy Preview
  ↓
用户查看预览
  ↓
确认后合并 main
  ↓
正式站更新
```

## 验收标准

- 能创建功能分支。
- 能推送到 GitHub。
- Pull Request 能生成 Netlify 预览链接。
- 预览链接不影响正式站。
- 正式站只在确认后更新。

## 后续计划

确认 GitHub 仓库后，把实际仓库地址、Netlify 站点和分支规则补进本文件。
