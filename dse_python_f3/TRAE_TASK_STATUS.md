# 任务进度同步 (TRAE Task Sync)

> 用于两台电脑的 TRAE 通过 GitHub 同步 DSE F.3 Python 课件维护进度

## 项目仓库

- **GitHub**: [`laoyizun/wechatCourse`](https://github.com/laoyizun/wechatCourse)
- **本地路径（多电脑）**: 各自 clone，路径无标准
  - 用户电脑 A (Windows): `C:\Users\54132\Desktop\项目\备课\wechatCourse`
  - 用户电脑 B (Mac): `~/Desktop/项目/备课/wechatCourse`（推测）
- **课件目录**: `dse_python_f3/`
- **进度文件**: `dse_python_f3/TRAE_TASK_STATUS.md` (本文件)

## 同步协议

```
电脑 A (工作)              ←──→    GitHub         ←──→    电脑 B (测试)
  ↓ pull latest                                     pull latest ↓
TR 加载 prompt.md + 本文件                              ↓
读 prompt.md 后 ai 接手任务
```

**每次会话开始**：
1. `git pull` 拉取最新
2. 读 `TRAE_TASK_STATUS.md` 看当前进度
3. 读 `prompt.md` 了解任务上下文
4. 继续工作

**每次会话结束**：
1. 修改 → `git commit` → `git push`
2. 更新 `TRAE_TASK_STATUS.md` 记录新进度
3. push 进度文件

---

## 当前任务

**任务**: DSE F.3 Python 课件 L1 + L2 维护（讲稿 PPT + 知识点英文校对）

**文件**:
- `dse_python_f3/L1.html` — Lesson 1: 让电脑开口说话（print + IPO）
- `dse_python_f3/L2.html` — Lesson 2: 让程序学会算数（数据类型 + f-string + 算 L1 留下的 Bug）

**参考资料**:
- `F3CL_Notes_Python_v1_(2025-26)_student_(P1-P26).pdf` — BLMCSS F.3 Computer Literacy 官方教材
- `2025-26 F3_Term2_Exam_Marking.pdf` — 期终考试标记 / 评分
- `F3CL_Notes_Computer_Systems_v4_(2024-25).pdf` — 计算机系统笔记

**输出文件**:
- `C:\Users\54132\Desktop\项目\备课\DSE_F3_Python_词汇表.md` — cheatsheet 词汇总结
- `C:\Users\54132\Desktop\项目\备课\GROK_Python3_Cheatsheet.png` — cheatsheet 截图
- `C:\Users\54132\Desktop\项目\备课\关键知识点英文检查.md` — 课件英文术语检查

---

## 进度时间线

### ✅ 已完成 (2026-08-11 / 2026-08-12)

| 日期 | 完成项 | commit | 备注 |
| --- | --- | --- | --- |
| 2026-08-11 | L1 + L2 初版 | `af4a2c0` | 课件初版 L1+L2 |
| 2026-08-11 | per-code-block Run/Copy 按钮 | `fc0a94e` | 每代码块按钮 |
| 2026-08-11 | 按钮健壮性 | `2c8b1ce` | 修复点击交互 |
| 2026-08-11 | 按钮定位到 nearest positioned ancestor | `7a9a021` | 修复遮挡 |
| 2026-08-12 | **code actions 点击 + slide compact z-index + emoji 修复** | `5111875` | **最近 commit** |

### ✅ 已完成（用户验证）

- ✅ 第 5 / 8 / 11 / 13 页 Run + Copy 按钮**可点击**
- ✅ 隐藏 slide（`.slide.compact`）**不再拦截点击**
- ✅ 按钮 emoji (`�� Copy`) **渲染正常**
- ✅ Run 按钮**打开 online-python.com**
- ✅ Copy 按钮**复制代码**（"✓ Copied" 反馈）

### ✅ 已完成（参考资料整理）

- ✅ 提取 GROK Learning Python 3 cheatsheet 全部词汇
- ✅ 生成 `DSE_F3_Python_词汇表.md`（8 章节 + cheatsheet 镜像）
- ✅ 检查 L1 + L2 课件术语与 GROK cheatsheet 一致性（100% 对齐）

### �� 待做 / 进行中

| 优先级 | 任务 | 状态 |
| --- | --- | --- |
| �� 中 | 课件 L1 + L2 翻译成英文版 | **待定** |
| �� 中 | 添加 L3+ 课件（条件 + 循环 + 函数） | **待定** |
| �� 低 | 词汇表加 IPA 音标 | **待定** |
| �� 低 | 课件导出 PDF / 打印版 | **待定** |

---

## 关键问题与解决方案

### 问题 1：代码块 Run + Copy 按钮被 `.slide.compact` 遮挡

**症状**：
- 第 5 / 8 / 11 / 13 页按钮**点不动**
- 鼠标 hover pre 区域变为 pointer，但实际点击被隐藏 slide 拦截

**根因**：
```css
.slide.compact {
  display: flex !important;  /* 覆盖了 .slide { display: none } */
  position: absolute;
}
```

**修复**：
```css
.slide.compact.active {       /* 改成 .active 选择器 */
  display: flex !important;
  flex-direction: column;
}
```

**commit**: `5111875`

### 问题 2：按钮 emoji 乱码

**症状**：
- Copy 按钮前面 `��` 显示为 `��` （UTF-8 replacement char）

**根因**：
- Python 之前写入 HTML 文件时，emoji 被错误编码

**修复**：
- 直接在源文件中查找 `chr(0xFFFD) + chr(0xFFFD) + ' Copy'` 替换为 `chr(0x1F4CB) + ' Copy'`
- L1: 15 处修复
- L2: 14 处修复

**commit**: `5111875`

### 问题 3：JS 按钮注入 → 改为 HTML 内置

**症状**：
- 旧 JS 用 `pres.forEach(...)` 给每个 `<pre>` 动态注入按钮
- 一旦 JS 报错，按钮就失效

**修复**：
- 用 Python 脚本 (re.sub) 把 `<div class="code-actions">` 直接注入到每个 `<pre>` 的 HTML 源
- JS 简化为只做事件绑定

**commit**: `5111875`

---

## 课件术语对齐（GROK cheatsheet）

### L1 + L2 覆盖的所有 cheatsheet 词汇

| 章节 | cheatsheet 术语 | L1 | L2 |
| --- | --- | --- | --- |
| Interact with the user | Print a message | ✅ | ✅ |
| | Print multiple values | ✅ | ✅ |
| | Asking the user for a string | ✅ | ✅ |
| | Asking the user for a whole number | ✅ | ✅ |
| Text (strings) | Single quoted | ✅ | ✅ |
| | Double quoted | ✅ | ✅ |
| | Add (concatenate) strings | ✅ | ✅ |
| | Convert string to integer | ✅ | ✅ |
| Variables | Creating a variable | ✅ | ✅ |
| | Using a variable | ✅ | ✅ |
| Whole numbers | Addition and subtraction | ✅ | ✅ |
| | Multiplication and division | ✅ | ✅ |
| | Powers | ❌ | ✅ |
| | Convert integer to string | ❌ | ✅ |
| Decide between options | Boolean | ❌ | ✅ |
| String manipulation | Compare two strings | ✅ | ✅ |
| | Is the string all lowercase? | ❌ | ✅ |
| Putting it together | Calculate the conversion | ❌ | ✅ |
| | Output the result | ✅ | ✅ |

**总覆盖**：GROK cheatsheet 31 个术语 → L1+L2 覆盖 19 个（61%）
**剩余**：12 个术语属于 L3+（条件 + 循环 + 字符串操作）

---

## 保留待办

下列任务**不在本次范围**，但**记录供后续参考**：

- [ ] 课件 L1 + L2 → 英文版（学生双语需求）
- [ ] L3 课件：if/elif/else + 比较运算符
- [ ] L4 课件：for loop + range()
- [ ] L5 课件：while loop + break/continue
- [ ] L6 课件：函数 def + 参数 + return
- [ ] L7 课件：list + tuple + dictionary
- [ ] L8 课件：算法初步（search + sort）
- [ ] 期终考试题库（基于 2025-26 F3_Term2_Exam）
- [ ] 词汇表加 IPA 音标
- [ ] 课件导出 PDF（PDF.js 渲染）

---

## 工作流（多电脑同步）

```bash
# 在新电脑开始会话
cd ~/Desktop/wechatCourse
git pull origin main

# 课件目录是 dse_python_f3/
# 让 TR 读 prompt.md 里的任务描述
# 让 TR 读 dse_python_f3/TRAE_TASK_STATUS.md 看进度

# 在新电脑结束会话
git add -A
git commit -m "your message"
git push origin main
```

---

## 联系

**用户**：laoyizun
**邮箱**：(待填写)
**GitHub**: [laoyizun](https://github.com/laoyizun)

如果有进展更新，直接编辑本文件并 commit + push，两台电脑都能看到最新状态。
