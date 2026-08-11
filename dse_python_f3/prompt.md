# AI 助手任务提示 · DSE F.3 Python 课件维护

> 用于在不同电脑的 TRAE Work 中调用 AI 助手时，作为初始 prompt 加载。
> 配套使用：[TRAE_TASK_STATUS.md](https://github.com/laoyizun/wechatCourse/blob/main/dse_python_f3/TRAE_TASK_STATUS.md)（项目进度同步文件）

---

## 🎯 任务一句话

**DSE F.3 Python 课件 L1、L2 的 HTML 维护、术语校对、增量开发。**

---

## 1. 项目背景

用户是 DSE（F.3 香港中学文凭）Computer Literacy 课程的 Python 教师，独立开发者，**AI 编程助手**。课件是一系列 HTML 幻灯片，配合 Python 在线编辑器使用。

### 课件结构

- **每个 lesson** 是一个独立的 HTML 文件
- 每个 HTML 用 CSS grid 排版，**左侧文字 + 右侧代码 + 比喻图**
- **slide 切换**通过 `.slide.active` class 控制
- **代码块**右下角有 `▶ Run` + `📋 Copy` 按钮（HTML 内置）
- 全程使用 **GroK Learning** F.3 Python cheatsheet 的术语

### L1+L2 知识范围

| Lesson | 主题 | Python 关键词 |
| --- | --- | --- |
| **L1** | 让电脑开口说话 | print, input, 变量, IPO, Bug Fix |
| **L2** | 让程序学会算数 | int/float/str 数据类型, 类型转换, f-string, 算 L1 3 个 Bug |

### L3+ 待开发

| Lesson | 主题 |
| --- | --- |
| L3 | 条件判断 (if/elif/else) |
| L4 | 循环 (for + range) |
| L5 | while 循环 + break/continue |
| L6 | 函数 (def + 参数 + return) |
| L7 | 数据结构 (list, tuple, dict) |
| L8 | 算法初步 (search + sort) |

---

## 2. 仓库文件结构（GitHub 视角）

GitHub 仓库：[`laoyizun/wechatCourse`](https://github.com/laoyizun/wechatCourse)

```
wechatCourse/
├── dse_python_f3/
│   ├── L1.html                                ← 主要工作文件
│   ├── L2.html
│   ├── TRAE_TASK_STATUS.md                    ← 当前进度（必读）
│   ├── prompt.md                              ← 本文件
│   ├── README                                 ← （如有）
│   └── F3CL_Notes_Python_v1_(2025-26)_student_(P1-P26).pdf  ← BLMCSS 官方教材
├── ai_education_course_site/                  ← 另一个课件项目
└── ...（其他项目）
```

### 关键文件 GitHub URL

| 文件 | URL |
| --- | --- |
| L1.html | https://github.com/laoyizun/wechatCourse/blob/main/dse_python_f3/L1.html |
| L2.html | https://github.com/laoyizun/wechatCourse/blob/main/dse_python_f3/L2.html |
| TRAE_TASK_STATUS.md | https://github.com/laoyizun/wechatCourse/blob/main/dse_python_f3/TRAE_TASK_STATUS.md |
| prompt.md | https://github.com/laoyizun/wechatCourse/blob/main/dse_python_f3/prompt.md |
| F3CL_Notes_Python.pdf | https://github.com/laoyizun/wechatCourse/blob/main/dse_python_f3/F3CL_Notes_Python_v1_(2025-26)_student_(P1-P26).pdf |
| GROK Cheatsheet PDF | https://github.com/laoyizun/wechatCourse/raw/main/dse_python_f3/F3CL_Notes_Python_v1_(2025-26)_student_(P1-P26).pdf （第 2 页） |

### 备课目录文件（用户本地）

> 以下是**用户备课用**的文件，**不在 GitHub 仓库里**。AI 不应该写这些路径。

| 文件 | 用途 |
| --- | --- |
| `DSE_F3_Python_词汇表.md` | cheatsheet 词汇总结 |
| `GROK_Python3_Cheatsheet.png` | cheatsheet 截图 |
| `关键知识点英文检查.md` | 课件术语校对 |

---

## 3. 关键约束 / 经验教训

### 3.1 课件 HTML 的硬规则

1. **`<pre>` 必须有 `position: relative`** —— 否则按钮 absolute 定位错误
2. **`pre` 必须有 `padding-top: 42px !important`** —— 给按钮留空间
3. **`.slide.compact` 必须用 `.slide.compact.active`** —— 否则覆盖 `.slide { display: none }`，让隐藏 slide 拦截点击
4. **`<div class="code-actions">` 必须 HTML 内置** —— 不要靠 JS 动态注入（JS 报错按钮就失效）
5. **emoji 写入文件** 必须用 `chr(0x1F4CB)` 或 escape 编码，不能用 `print` 内嵌字符串（中文 codepage 错）

### 3.2 颜色 / 字体 / 风格

- **主色**：`#2563eb` (blue) / `#10b981` (green) / `#ef4444` (red) / `#f59e0b` (amber) / `#14b8a6` (teal)
- **背景**：`#0f243f` (代码块深蓝)
- **字体**：`'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', sans-serif`
- **代码字体**：`'JetBrains Mono', 'Fira Code', Consolas, monospace`
- **标题字号**：`clamp(28px, 3.4vw, 40px)`
- **正文字号**：18-20px
- **行高**：1.6-1.75

### 3.3 教学风格

- **每个新概念必须配 1 个比喻**（例如变量 = 碗、IPO = 大喇叭）
- **每个 slide 配代码**供学生边看边敲
- **练习区**用 `.practice` 组件（带 label 标签）
- **Bug 案例**用 `.bug` 组件（红色左边框）
- **总结合**用 `.takeaway` 组件（绿色左边框）

---

## 4. 常用脚本（跨平台）

### 4.1 Git 同步（Windows / Mac / Linux 通用）

```bash
# 在任意电脑开始会话
cd <your-local-wechatCourse-path>
git pull origin main

# 看历史
git log --oneline -10

# 修改后
git status
git add dse_python_f3/
git commit -m "descriptive message"
git push origin main
```

**注意**：本地路径不复用 —— 写到 prompt 里会失效。本地用 `git remote -v` 确认远端是 `laoyizun/wechatCourse`。

### 4.2 启动本地 server 测试课件

**Windows (PowerShell)**：

```powershell
cd <your-local-wechatCourse-path>
# 找 venv python
& "$env:USERPROFILE\.virtualenvs\face-recognition-ZkQjCaSi\Scripts\python.exe" -m http.server 8765 --bind 127.0.0.1
# 或用系统 python
python -m http.server 8765 --bind 127.0.0.1
```

**Mac / Linux**：

```bash
cd <your-local-wechatCourse-path>
python3 -m http.server 8765 --bind 127.0.0.1
# 或
python -m http.server 8765 --bind 127.0.0.1
```

浏览器打开 `http://127.0.0.1:8765/dse_python_f3/L1.html`

### 4.3 提取 GROK Cheatsheet PDF 文本

```python
import pypdf
# Windows 路径示例
reader = pypdf.PdfReader(r'C:\Users\54132\Desktop\wechatCourse\dse_python_f3\F3CL_Notes_Python_v1_(2025-26)_student_(P1-P26).pdf')
# Mac 路径示例
# reader = pypdf.PdfReader(r'/Users/yourname/path/to/dse_python_f3/F3CL_Notes_Python_v1_(2025-26)_student_(P1-P26).pdf')
for i, page in enumerate(reader.pages):
    print(f'=== Page {i+1} ===')
    print(page.extract_text())
```

### 4.4 浏览器实地测试（TRAE 有 browser 插件）

```javascript
// 在浏览器 DevTools / TRAE browser MCP 跑：
const pre = document.querySelector('.slide.active').querySelector('pre');
const actions = pre.querySelector('.code-actions');
console.log('actions exists:', !!actions);
console.log('opacity:', getComputedStyle(actions).opacity);
```

### 4.5 修 Python emoji 乱码（跨平台）

```python
# -*- coding: utf-8 -*-
import os
import re

# 替换文件路径 ↓（按你电脑改）
SOURCE_DIR = r'<your-local-wechatCourse-path>/dse_python_f3'

for fname in ['L1.html', 'L2.html']:
    p = os.path.join(SOURCE_DIR, fname)
    with open(p, encoding='utf-8') as f:
        c = f.read()
    bom = chr(0xFFFD) + chr(0xFFFD)
    emo = chr(0x1F4CB)
    print(fname, 'before:', c.count(bom + ' Copy'))
    c = c.replace(bom + ' Copy', emo + ' Copy')
    print(fname, 'after:', c.count(emo + ' Copy'))
    with open(p, 'w', encoding='utf-8') as f:
        f.write(c)
```

---

## 5. 任务类型（按需加载）

### 5.1 课件修改

- **改文字** → 找 HTML，直接修改 `<span>` 内容
- **改样式** → 找 CSS 规则（在 `<style>` 块内）
- **加 slide** → 复制现有 slide 模板，修改 class + content
- **加代码块** → `<pre><code>...</code><div class="code-actions">...</div></pre>` 模板

### 5.2 Bug 修复

- **按钮点不动** → 检查 `.slide.compact` CSS 修改
- **emoji 乱码** → 找 `chr(0xFFFD) + chr(0xFFFD)` 替换
- **slide 切换卡顿** → 检查 `.slide.active` 规则是否被覆盖
- **pre 文字溢出** → 检查 `pre { white-space: pre-wrap }`, `overflow-x: auto`

### 5.3 词汇校对

- 参考 `DSE_F3_Python_词汇表.md`（GROK cheatsheet 整理）
- 检查 L1+L2 课件术语是否对齐
- 不一致的术语修正（大小写、复数、连字符）

### 5.4 增量开发

- L3+ 课件模板开发
- 多语言版本（英文版）
- PDF 导出
- 在线考试 / 题库

---

## 6. 协作约定

### 6.1 中文术语 / 英文术语对照

课件中**中文 + 英文术语**并列出现，例如：
```html
<h2>什么是 <span class="highlight">print</span> / 打印输出？</h2>
```

**英文术语**必须使用 GROK cheatsheet 的官方用法：
- `print`, `input`, `f-string` ✓ （小写）
- `int`, `float`, `str`, `bool` ✓ （Python 类型名）
- `integer`, `boolean`, `floating-point` ✗ 应改成 `int`, `bool`, `float`（除非作为概念词对照时）

### 6.2 不要做

- ❌ 不要修改 `wechatCourse` 外的其他项目（除非显式要求）
- ❌ 不要 push 到 main 之前忘了 commit
- ❌ 不要给课件加 analytics / tracking
- ❌ 不要删除 PDF 文件（`F3CL_Notes_Python_v1_*.pdf` 是教材）
- ❌ 不要写死本地路径（在 prompt / 文档里）

### 6.3 要做

- ✅ 每次修改前先 `git pull`
- ✅ 每次修改后 commit + push
- ✅ 重大修改前**先开浏览器测试**（用 `python -m http.server`）
- ✅ 重大修改后**更新 `TRAE_TASK_STATUS.md`**
- ✅ 用 `git log --oneline -10` 跟踪历史
- ✅ 跨平台脚本用 `<your-local-path>` 占位符

---

## 7. 接续这个任务时

1. **拉取最新**：

   ```bash
   cd <your-local-wechatCourse-path>
   git pull origin main
   ```

2. **读进度**：
   - GitHub 上看：[TRAE_TASK_STATUS.md](https://github.com/laoyizun/wechatCourse/blob/main/dse_python_f3/TRAE_TASK_STATUS.md)
   - 看"已完成"+"进行中"+"待办"三栏

3. **询问用户**：
   - "看到已完成 X / Y / Z，要继续做哪一项？"
   - 或者 "要修复什么问题？"

4. **开始工作**：
   - 先读 L1.html / L2.html 实际 HTML 结构（GitHub 上有）
   - 用浏览器 MCP 实地测试
   - 仅修改课件文件（L1.html / L2.html）
   - 重要修改后 commit + push

5. **结束时**：
   - 更新 `TRAE_TASK_STATUS.md` 进度
   - commit + push

---

## 8. 紧急联系

如果出现严重问题（slide 完全不工作、文件损坏、git 冲突）：
- **不要** force push
- **不要**删除任何文件
- **回滚**：`git checkout HEAD~1 -- dse_python_f3/L1.html`
- **请教**用户 laoyizun

---

## 9. 词汇参考

完整 GROK cheatsheet 词汇表：`DSE_F3_Python_词汇表.md`（用户备课目录本地文件）

最常用 10 个术语：

| 中文 | 英文 |
| --- | --- |
| 打印 | print |
| 输入 | input |
| 变量 | variable |
| 字符串 | string |
| 整数 | integer |
| 浮点数 | float |
| 布尔 | boolean |
| 字符串拼接 | concatenation |
| 类型转换 | type conversion |
| 错误 | error |

---

## 10. 任务模型

```
用户提出需求
   ↓
AI 读 prompt.md (GitHub) + TRAE_TASK_STATUS.md (GitHub)
   ↓
AI 看 L1.html / L2.html 源码（GitHub 上）
   ↓
AI 用 browser MCP 实地测试（或本地启动 server）
   ↓
AI 做出修改（只改 L1.html + L2.html）
   ↓
AI 用浏览器测试修改
   ↓
AI commit + push
   ↓
AI 更新 TRAE_TASK_STATUS.md
   ↓
AI commit + push 进度文件
   ↓
返回结果给用户
```

---

**最后更新**：2026-08-12
**作者**：AI 助手（基于用户对话历史整理）
**配套文件**：[TRAE_TASK_STATUS.md](https://github.com/laoyizun/wechatCourse/blob/main/dse_python