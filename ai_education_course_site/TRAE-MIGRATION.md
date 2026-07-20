# TRAE 迁移说明｜AI 教育赋能课程网页

## 给 TRAE 的接手提示词

你正在接手一个名为“AI 教育赋能课程网页”的静态课程网站。请先阅读本文件和 `project-memory.md`，再开始修改。

工作范围只限于：

`/Users/laoyizun/Documents/Codex/2026-06-04/https-github-com-laoyizun-wechatcourse-tree/repo/ai_education_course_site`

这是一个纯静态 HTML/CSS/JS 项目，不是 React、Vue、Vite 或 Next.js 项目。不要主动重构为前端工程，不要引入构建工具，除非用户明确要求。

主要任务方向：

- 继续修改课程 PPT 网页和实操指引 HTML。
- 生成新的课程页面时，复用现有 HTML 结构和 `assets/style.css` 样式。
- 继续优化最终项目网页，后续可能把静态模拟版升级为真实前后端版本。
- 所有 PPT 和实操指引面向学生，不写教师备课式措辞。
- 内容避免啰嗦，同一个问题不要反复说；每一页只保留一个清楚的学习重点。

修改前先检查：

1. `project-memory.md`
2. `index.html`
3. `guide-index.html`
4. 目标课时对应的 PPT HTML 和 guide HTML
5. `assets/style.css`

修改后至少检查：

1. HTML 是否能直接在浏览器打开。
2. 课程目录和实操目录链接是否正确。
3. 最后一页按钮是否能跳到下一课或实操指引。
4. 页面文字是否仍然面向学生。
5. 不要提交无关文件或大范围格式化。

## 项目定位

- 项目名称：AI 教育赋能课程网页
- 课程主题：面向国内初高中与高考体系学科学习的 AI Agent 课程
- 当前课程主线：L1-L8 完成 Coze Agent/知识库/插件/工作流能力建设，最终项目完成 AI 数学学习助手网页
- 最终项目：`final-project.html` 和 `final-project-guide.html`

## 技术结构

项目类型：

- 纯静态网页
- 无 `package.json`
- 无构建命令
- 无 `.env`
- 无前端框架依赖

核心技术：

- HTML
- CSS
- 原生 JavaScript

全局样式：

`assets/style.css`

PPT 翻页脚本：

`assets/script.js`

图片目录：

`images/`

## 关键文件路径

课程入口：

`ai_education_course_site/index.html`

实操指引入口：

`ai_education_course_site/guide-index.html`

项目记忆：

`ai_education_course_site/project-memory.md`

消课说明：

`ai_education_course_site/course-completion-notes.md`

最终项目静态模拟页：

`ai_education_course_site/final-project.html`

最终项目实践指引：

`ai_education_course_site/final-project-guide.html`

L7 循环工作流可复制文件：

`ai_education_course_site/L7-coze-loop-workflow-clipboard.txt`

L8 Coze 工作流可复制文件：

`ai_education_course_site/L8-coze-workflow-clipboard-with-db-kb.txt`

L4 知识库样例：

`ai_education_course_site/L4-knowledge-base-demo.md`

L8 数学知识库样例：

`ai_education_course_site/L8-math-knowledge-base-demo.md`

## Git 配置

仓库根目录：

`/Users/laoyizun/Documents/Codex/2026-06-04/https-github-com-laoyizun-wechatcourse-tree/repo`

课程目录：

`/Users/laoyizun/Documents/Codex/2026-06-04/https-github-com-laoyizun-wechatcourse-tree/repo/ai_education_course_site`

远端仓库：

`ssh://git@github.com/laoyizun/wechatCourse.git`

主分支：

`main`

常用命令：

```bash
cd /Users/laoyizun/Documents/Codex/2026-06-04/https-github-com-laoyizun-wechatcourse-tree/repo
git status --short
git pull --rebase origin main
git add ai_education_course_site
git commit -m "描述本次课程修改"
git push origin main
```

协作规则：

- 用户明确说 push 时再推送。
- push 前先看 `git status --short`，避免提交其他课程目录或无关文件。
- 如果另一个电脑也会修改，先 `git pull --rebase origin main`。

## API Key 与真实接入

当前静态课程网页没有 API Key，也没有真实后端接口配置。

最终项目当前是静态模拟交互，不直接调用 Coze。

如果未来要做真实前后端版本，请不要把 API Token 写进前端 HTML/JS。建议使用：

```bash
COZE_API_TOKEN=在本地或服务器环境变量中配置
COZE_API_BASE_URL=按实际 Coze 环境配置
COZE_WORKFLOW_ID=按实际工作流配置
COZE_BOT_ID=按实际 Agent 配置
```

真实接入建议链路：

```text
网页前端
  -> 后端代理 / 云函数
  -> Coze Agent 或 Workflow API
  -> Coze 工作流内部查询数据库 / 知识库 / 插件
  -> 返回结构化 JSON
  -> 网页渲染学习进度、错题本、复习任务
```

重要边界：

- 网页前端不能直接暴露 Coze API Token。
- 网页不能直接读取 Coze 数据库。
- Coze 数据库读写应放在工作流内部，由后端代理触发工作流。

## 当前课程状态

- L1-L8 是当前主课程。
- 原 L9/L10 已合并为最终项目实践，不再保留旧 L9/L10 页面。
- `final-project.html` 是学生看到的静态模拟项目网页。
- `final-project-guide.html` 是项目实践指引，包含 UC 图、数据表、工作流线框图、Agent Prompt、按钮映射和真实接入说明。

## 页面风格要求

- 风格清晰简洁，功能分块一目了然。
- PPT 和实操指引面向学生，不写“本节课老师可以……”这类表达。
- 尽量使用短句，避免同一个概念反复解释。
- 课程内容要能直接服务课堂演示和学生实操。
- 新页面应复用现有卡片、表格、按钮、chip、phase-block、project-panel 等样式。

## 迁移后第一步

在 TRAE 中打开目录：

`/Users/laoyizun/Documents/Codex/2026-06-04/https-github-com-laoyizun-wechatcourse-tree/repo/ai_education_course_site`

然后先阅读：

1. `TRAE-MIGRATION.md`
2. `project-memory.md`
3. `index.html`
4. `guide-index.html`
5. `final-project.html`
6. `final-project-guide.html`

如果用户要继续做真实前后端版本，先不要直接改静态课程页，先输出技术方案，确认后再新建独立实现文件。
