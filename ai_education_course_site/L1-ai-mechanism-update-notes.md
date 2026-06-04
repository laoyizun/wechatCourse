# L1 AI Mechanism Update Notes

更新时间：2026-06-04

## 本次修改范围

本次修改 `ai_education_course_site` 课程网页中的 L1 PPT 页面，并同步更新本记录文件，方便两端 Codex 继续协作。

涉及文件：

- `L1.AI Learning System.html`
- `assets/style.css`
- `L1-ai-mechanism-update-notes.md`

## L1 页面调整结果

L1「创建第一个 AI 学习系统」新增硬核知识拓展内容，并从原来的一页机制说明调整为两页结构：

```text
第 8 页：LLM 如何根据上下文生成回答
第 9 页：IB Study Coach v1 如何使用系统指令改变 AI 行为
```

插入位置：

```text
System Components
一个 AI 学习系统由什么组成？
        ↓
新增页 1：LLM 如何根据上下文生成回答
        ↓
新增页 2：系统指令如何改变 AI 行为
        ↓
Mission
今日任务
```

页面总数：

```text
18 页 → 20 页
```

## 新增页 1：底层机制页

页面标题：

```text
你知道吗？
LLM 如何根据上下文生成回答
```

核心解释：

```text
大模型不是先“想好一句完整回答”，而是在当前上下文中一步步预测下一个 token。
上下文里放了什么，会直接影响 AI 接下来生成什么。
```

概念视图：

```text
System Prompt
系统指令
        ↓
Conversation History
历史对话
        ↓
User Message
用户当前输入
        ↓
Context Window
模型本次可读取的信息
        ↓
Next Token Prediction
逐步预测下一个 token
        ↓
AI Response
生成完整回答
```

底部总结：

```text
AI 的回答不是凭空出现的，而是由它当前能看到的上下文共同塑造出来的。
```

## 新增页 1：专业词汇

### LLM

Large Language Model，大语言模型，能基于大量文本模式生成语言。

教学重点：

- LLM 是 ChatGPT、Coze Agent 等背后的核心模型类型。
- 它不是传统意义上的数据库检索工具，而是基于语言模式生成回答。

### Token

模型处理文本的基本单位，可以是一个字、一个词，也可以是词的一部分。

教学重点：

- 模型不是直接按“整句话”理解和生成，而是把文本拆成 token。
- 大模型生成回答时，本质上是在一步步预测下一个 token。

### Context Window

上下文窗口，模型一次回答时能“看到”的文本范围。

教学重点：

- 模型回答时依赖当前上下文窗口中的信息。
- 如果重要规则、记忆或资料没有进入上下文，模型就可能无法使用它们。

### Next Token Prediction

下一个 token 预测，大模型生成文本的核心机制。

教学重点：

- 模型会根据当前上下文预测接下来最可能出现的 token。
- 完整回答是许多次 token 预测连续累积出来的结果。

## 新增页 2：课程 Agent 应用页

页面标题：

```text
IB Study Coach Example
系统指令如何改变 AI 行为
```

页面目的：

- 把第 1 页的 LLM 机制落到课程主线 Agent。
- 让学生看到同一句输入在普通聊天模式和系统指令模式下的差异。
- 强化 L1 的实践任务：写清楚身份、目标、回应规则。

左侧专业词汇：

```text
System Prompt：规定 AI 的身份、目标、规则和边界。
Instruction Hierarchy：指令层级，高优先级指令会更强地约束模型行为。
Agent Behavior：AI 在特定身份、目标和规则下表现出的稳定响应方式。
```

右侧案例结构：

```text
普通聊天模式

学生：
我今天不想学数学。

AI：
加油，你可以的！只要坚持就一定会成功。

问题：
没有身份、没有目标、没有规则，只能回到礼貌但空泛的默认回答。
```

```text
IB Study Coach v1

系统指令：
你是一名帮助 IB 学生学习的 AI 学习教练；
当学生说“不想学”时，先识别状态，再给出 5 分钟内可完成的最小行动。

AI：
你现在像是启动困难。先做一个 5 分钟任务：只看题目条件，不求解。
```

模式对比：

```text
Without System Prompt
默认聊天模式
        →
With System Prompt
学习 Agent 模式
```

底部总结：

```text
写清楚“身份、目标、回应规则”，就是在把普通聊天 AI 变成一个可测试、可升级的学习 Agent。
```

## 样式修改

在 `assets/style.css` 中新增并调整了两类知识拓展页样式。

底层机制页相关：

- `.term-list`
- `.term`
- `.mechanism-card`
- `.flow-step`
- `.flow-arrow`
- `.takeaway`
- `.mechanism-slide`

课程 Agent 示例页相关：

- `.agent-slide`
- `.mini-terms`
- `.agent-compare`
- `.agent-card`
- `.mode-flow`

设计目标：

- 保持原课程网页的白色卡片、蓝色强调、简洁教学风格。
- 第 1 页聚焦底层机制，不塞入 Agent 案例。
- 第 2 页聚焦课程 Agent 应用，不重复过多机制解释。
- 适配 1280x720 浏览器视口，不遮挡底部导航。

## QA 检查

需要在本地浏览器检查：

- L1 页面页数应为 `20` 页。
- 第 `8 / 20` 页为 LLM 底层机制页。
- 第 `9 / 20` 页为 IB Study Coach 系统指令应用页。
- 两页在 1280x720 视口下显示完整，不压底部导航。
- 后续页面导航正常。

本地预览地址：

```text
http://127.0.0.1:4173/L1.AI%20Learning%20System.html
```

## 对话记忆

用户希望在课程里加入更硬核的 AI 知识，不是泛泛的“你知道吗”，而是能让学生学到真正的底层干货。

已经确定优先加入硬核知识拓展的课程：

- L1：系统指令
- L3：长期记忆
- L4：苏格拉底式讲题
- L5：RAG 知识库
- L7：Workflow
- L9：学习数据与长期反馈

最新结构决策：

- 不再强行把“底层机制 + 术语注释 + 概念视图 + 课程 Agent 举例”塞进一页。
- 每个硬核知识点优先拆成两页：
  - 第 1 页：底层机制页，讲概念、术语、概念视图。
  - 第 2 页：课程 Agent 应用页，讲 IB Study Coach 如何使用这个机制。
- 学生视角优先，不使用教师备课式说明，例如「和本节课的关系」。
- 每一页都要像正式 PPT，不像备注文档。

后续课程建议延续两页结构：

### L3 长期记忆

第 1 页：

- AI 的长期记忆不是自动发生的。
- LLM 参数不会因为普通对话直接改写。
- 长期记忆通常来自外部存储、记忆提取、记忆检索和上下文注入。

第 2 页：

- IB Study Coach v3 记录学生薄弱点、错因和学习状态。
- 示例：学生说“我最怕函数题，尤其是复合函数”，Agent 更新学习档案，并在下一次复习建议中调用。

### L4 苏格拉底式讲题

第 1 页：

- 会讲题的 AI 不应该直接吐答案。
- 讲题 Agent 需要问题拆解、推理脚手架、提示层级和分步提示。

第 2 页：

- IB Study Coach v4 面对“这道函数题我完全不会”时，先拆已知条件、目标和第一步，不直接给完整答案。

### L5 RAG 知识库

第 1 页：

- 知识库背后是 RAG。
- 解释 chunking、embedding、vector database、similarity search、grounding。

第 2 页：

- IB Study Coach v5 根据学生上传的 IA rubric 检索 conclusion 相关依据。
- 如果资料库没有找到直接依据，必须明确说明，不假装引用。

### L7 Workflow

第 1 页：

- Workflow 让 AI 像状态机一样工作。
- 解释 node、input/output、state machine、transition rule。

第 2 页：

- IB Study Coach v7 启动函数复习流程，按诊断、练习、反馈、下一次任务推进。

### L9 学习数据与长期反馈

第 1 页：

- 没有数据，AI 只能说鼓励话。
- 解释 learning event、event log、structured data、pattern detection、feedback loop、learning analytics。

第 2 页：

- IB Study Coach v9 根据一周学习记录生成复盘。
- 示例：完成次数、重复错因、明显进步、下周最小任务。

## 协作注意事项

- 当前仓库用于多台电脑和多个 Codex 协作。
- 每次继续修改前，先 `git pull` 或 `git fetch` 同步远端。
- 当前机器已通过 SSH key 完成 GitHub push 权限配置。
- 远端使用 SSH URL：`ssh://git@github.com/laoyizun/wechatCourse.git`
- 当前仓库配置了 `core.sshCommand`，用于通过 `ssh.github.com:443` 和本机代理推送。
- 本记录文件用于同步课程设计记忆，后续 Codex 修改前应优先阅读。
