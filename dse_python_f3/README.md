# DSE F.3 Python 课件系统

> 这是 DSE F.3 Python 课程的 HTML 课件，由 `_template.html` 模板 + `_new_lesson.py` 智能脚本生成。

## 📁 目录结构

```
dse_python_f3/
├── _template.html       ← 标准模板（不要直接编辑课件从这里复制）
├── _new_lesson.py       ← 智能生成脚本（智能 <main> 边界检测）
├── README.md            ← 本文件
├── index.html           ← 主页（课程卡 + 作业 + 记忆卡）
├── L1.html / L2.html    ← 已完成课件（参考标准）
├── L3.html              ← 当前最新格式（所有实战都用双按钮）
├── L4.html
├── L5.html
└── L6.html
```

## 🚀 如何新建一节课（L7、L8 ...）

### 三步流程

```bash
# 1. 写 body 文件
cat > /tmp/l7_body.html << 'EOF'
  <section class="slide title-slide active">
    <div class="left">
      <div class="kicker">Lesson 7</div>
      <h1>新章节标题</h1>
      <p class="subtitle">概念名 · N 个概念</p>
    </div>
  </section>
  ...
EOF

# 2. 运行脚本（智能 <main> 边界检测，零错误）
python _new_lesson.py 7 "新章节标题" /tmp/l7_body.html 12

# 3. 提交 + 推送
git add L7.html
git -c user.email="x@x" -c user.name="x" commit -m "feat(L7): ..."
git push origin main
```

### `_new_lesson.py` 参数

```
python _new_lesson.py <课次> <标题> <body文件> <总页数>

示例：python _new_lesson.py 7 "字典" /tmp/l7_body.html 12
```

## 📐 标准格式（L3-L6 沿用）

### 1. Cover 页（页 1）

```html
<section class="slide title-slide active">
  <div class="left">
    <div class="kicker">Lesson N</div>
    <h1>让程序学会<span class="highlight">XXX</span></h1>
    <p class="subtitle">概念名 · N 个概念</p>
  </div>
</section>
```

### 2. 概念页（左右结构）

```html
<section class="slide">
  <div class="left">
    <div class="kicker">Concept N</div>
    <h2>标题</h2>
    <p class="subtitle">描述</p>
  </div>
  <div class="right">
    <!-- 代码 + 检验问题 -->
    <div class="practice">
      <div class="label">代码标题</div>
<pre><code>code...</code><div class="code-actions">...</div></pre>
    </div>
    <div class="check-q">
      <div class="check-q-text">❓ Q · 题目</div>
      <details><summary>看答案</summary><div class="check-a">答案</div></details>
    </div>
  </div>
</section>
```

### 3. 实战页（**核心** · 标准格式）

```html
<section class="slide wide">
  <div style="display:flex; align-items:center; gap:16px; padding-bottom:14px; margin-bottom:14px; border-bottom:2px solid var(--line);">
    <div class="kicker">实战 N</div>
    <h2 style="margin:0; font-size:24px;">📋 题目标题</h2>
    <p class="subtitle" style="margin:0; font-size:14px; color:var(--muted);">描述</p>
  </div>
  <div class="grid2" style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
    <div class="card">
      <h3 style="color:var(--blue);">题目</h3>
      <p style="font-size:17px; margin-top:6px;">题目描述...</p>
    </div>
    <!-- ⭐ 双按钮答案区（标准格式） -->
    <div class="answer-fold">
      <div class="answer-tabs">
        <button class="answer-tab active" data-mode="skeleton">答案骨架</button>
        <button class="answer-tab" data-mode="solution">参考答案</button>
      </div>
      <pre class="code-skeleton"><code>骨架（含 ___ 填空）</code></pre>
      <pre class="code-solution" style="display:none"><code>完整答案</code></pre>
    </div>
  </div>
</section>
```

### 4. Recap 页（3×2 网格）

```html
<section class="slide">
  <div class="left">
    <div class="kicker">Recap</div>
    <h2>今天学 N 件事</h2>
    <p class="recap-next">下次学：...</p>
  </div>
  <div class="right">
    <div class="recap-grid">
      <div class="recap-card card-blue">...</div>
      ...
    </div>
  </div>
</section>
```

### 5. 作业页（4 个必做 · 上下布局）

```html
<section class="slide wide">
  <div style="display:flex; align-items:center; gap:16px; ...">
    <div class="kicker">作业</div>
    <h2 style="margin:0; font-size:24px;">📚 4 个必做</h2>
  </div>
  <div class="grid2" style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
    <div class="card success"><h3 style="color:#047857;">必做 1 · 基础</h3>...</div>
    <div class="card" style="border-left:5px solid var(--blue);">...</div>
    <div class="card" style="border-left:5px solid var(--amber);">...</div>
    <div class="card" style="border-left:5px solid var(--teal);">...</div>
  </div>
</section>
```

## 🎨 双按钮答案区（关键）

每个实战的答案区都用**双按钮切换**：
- **答案骨架**（默认）—— 代码含 `___` 填空位，学生主动思考
- **参考答案**（点击切换）—— 完整答案

**重要**：自动转换 `___` 为正确代码**不可靠**（多次尝试失败），必须**人工写 solution**。

## 🔧 模板优势

| 优势 | 说明 |
| --- | --- |
| 智能 `<main>` 边界检测 | 不依赖行号，不会留 Cover/Recap 残留 |
| 零错误 | 脚本每次运行前验证 body 结构 |
| 一次性 | body 写好，一行命令生成 Lx.html |
| 可复用 | L3-L6 全部基于同一模板，格式 100% 一致 |

## ⚠️ 不要做的事

- ❌ 不要复制 L3.html 然后手动修改（应该用脚本）
- ❌ 不要在课件里直接编辑 CSS（应该改 _template.html）
- ❌ 不要让 `___` 自动转换为答案（容易出错）
- ❌ 不要忘记在 `index.html` 添加新课的课程卡、作业、记忆卡

## 📝 index.html 同步

每新增一节，记得在 `index.html` 中：
1. 添加课程卡（启用 enabled 状态）
2. 添加作业卡（HOMEWORKS 数组）
3. 添加记忆卡（FLASHCARDS 数组，至少 3 张）

## 🔍 故障排除

| 问题 | 解决 |
| --- | --- |
| 脚本找不到模板 | 在 `dse_python_f3/` 目录下运行 |
| body 不含 `<section>` | 脚本会报错 |
| main 不平衡 | 检查 body 是否含 `<main>` 标签 |
| 答案切换不工作 | 检查 `_new_lesson.py` 是否正确替换 |