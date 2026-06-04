# L1 AI Mechanism Update Notes

更新时间：2026-06-04

## 本次修改范围

本次只修改 `ai_education_course_site` 课程网页中的 L1 PPT 页面，并新增本记录文件。

涉及文件：

- `L1.AI Learning System.html`
- `assets/style.css`
- `L1-ai-mechanism-update-notes.md`

## L1 页面新增内容

在 L1「创建第一个 AI 学习系统」中新增一页硬核知识拓展页。

插入位置：

- 原位置：`System Components` 之后
- 新位置：新增 `AI Mechanism` 页
- 后续页面：`Mission` 及后续操作页顺延

新增页标题：

```text
你知道吗？
LLM 如何听懂系统指令
```

新增页核心解释：

```text
大模型不是先“想好一句完整回答”，而是在当前上下文中一步步预测下一个 token。
系统指令越清楚，模型越容易稳定进入你设计的学习角色。
```

## 新增概念视图

右侧新增了一个简洁流程图，用来说明 LLM 生成回答时会参考哪些信息。

流程结构：

```text
System Prompt
身份、目标、规则
        ↓
Conversation History
历史对话
        ↓
User Message
学生当前输入
        ↓
Context Window
模型本次可读取的信息
        ↓
Next Token Prediction
逐步生成回答
```

这个视图的教学目的：

- 让学生理解 AI 不是“自动懂你”，而是根据当前输入上下文生成回答。
- 让学生理解为什么系统指令、身份、目标、回应规则会影响输出。
- 把 L1 的实践任务和 LLM 底层机制连接起来。

## 新增专业词汇

新增了 4 个专业词汇小词典，面向学生解释，不使用过度学术化语言。

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

### System Prompt

系统指令，用来规定 AI 的身份、目标、规则和边界。

教学重点：

- System Prompt 比普通用户输入更像 Agent 的“行为设定”。
- L1 让学生写身份、目标、回应规则，本质上就是在设计系统指令。

## 学生视角总结

底部总结采用学生可直接理解的表述，避免出现“和本节课的关系”这种教师备课口吻。

最终文案：

```text
写清楚“身份、目标、回应规则”，就是在给模型建立高优先级上下文，让 AI 从普通聊天模式进入学习系统模式。
```

## 样式修改

在 `assets/style.css` 中新增了 L1 知识拓展页需要的样式。

新增样式模块：

- `.term-list`
- `.term`
- `.mechanism-card`
- `.flow-step`
- `.flow-arrow`
- `.takeaway`
- `.mechanism-slide` 相关压缩排版样式

设计目标：

- 保持原课程网页的白色卡片、蓝色强调、简洁教学风格。
- 左侧用于概念解释和词汇注释。
- 右侧用于流程图和一句总结。
- 适配 1280x720 浏览器视口，不遮挡底部导航。

## QA 检查

已在本地浏览器检查：

- L1 页面页数从 `18` 页变为 `19` 页。
- 新增页面位于第 `8 / 19` 页。
- 新增页在 1280x720 视口下显示正常。
- 页面底部总结不遮挡导航。
- 没有修改其他课程页面。

本地预览地址：

```text
http://127.0.0.1:4173/L1.AI%20Learning%20System.html
```

## 对话记忆

用户希望在课程里加入更硬核的 AI 知识，不是泛泛的“你知道吗”，而是能让学生学到真正的底层干货。

讨论后确定优先加入硬核知识拓展的课程：

- L1：系统指令
- L3：长期记忆
- L4：苏格拉底式讲题
- L5：RAG 知识库
- L7：Workflow
- L9：学习数据与长期反馈

整体方向：

- 每次不一定每节课都加，只在和本节课强相关的位置加。
- 每个拓展页尽量采用「一页概念描述 + 简洁概念视图 + 专业词汇注释」。
- 专业词汇需要解释，例如 `token`、`LLM`、`context window`、`RAG`、`embedding`、`workflow`。
- 面向学生展示，不要出现教师备课式说明，例如「和本节课的关系」。
- 修改先在本地检查，确认没问题后再 push。

后续可继续扩展的方向：

- L3：解释 LLM 本身没有稳定长期记忆，长期记忆通常来自外部存储、记忆检索和上下文注入。
- L4：解释苏格拉底式讲题、问题拆解、提示层级和推理脚手架。
- L5：解释 RAG、chunking、embedding、vector database、similarity search、grounding。
- L7：解释 workflow、node、input/output、state machine、transition rule。
- L9：解释 learning event、event log、structured data、pattern detection、feedback loop、learning analytics。

## 协作注意事项

- 当前仓库用于多台电脑和多个 Codex 协作。
- 每次继续修改前，建议先 `git pull` 同步远端。
- 本次修改完成后会推送到 GitHub，方便另一台电脑继续查看和协作。
