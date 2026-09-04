# L2 独立练习 1 · 填空（超市收银）

### @explicitHints true

## {1. 练习说明 @showdialog}

欢迎来到 L2 独立练习 1。

今天小猪佩奇要去超市买东西——他要买 3 个草莓和 2 个汉堡。草莓 3 元一个，汉堡 8 元一个。

你能帮他算一下总共要多少钱吗？

~hint
这是 L2 的第一个填空练习——超市收银。

你要用 L1 学的变量 + L2 学的运算符：

- 草莓 3 元 × 3 个 = 9 元
- 汉堡 8 元 × 2 个 = 16 元
- 总价 = 9 + 16 = 25 元

用 Python 写：total_price = strawberry_price * strawberry_count + burger_price * burger_count

运算顺序：先乘后加（Python 默认的运算优先级）
hint~

## {2. 运行代码}

请在右栏编辑器里完成总价的计算。

~hint
你已经看到：

strawberry_price = 3
burger_price = 8
strawberry_count = 3
burger_count = 2

总价 = 草莓价 × 草莓数 + 汉堡价 × 汉堡数

算出来填到 total_price = ____ 里。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================
strawberry_price = 3
burger_price = 8
strawberry_count = 3
burger_count = 2
total_price = strawberry_price * strawberry_count + burger_price * burger_count
# =============================================

# =============================================
# 🔒 NPC 判定区（不用看代码）
# =============================================
if total_price == 25:
    game.show_long_text("售货员：'对！总价25 元，找你0 元！'", 1)
else:
    game.show_long_text("售货员：'总价不对，再算算哦'", 1)
# =============================================
```

## {3. 问题在哪 @showdialog}

代码里有 4 个变量：两个是价格（strawberry_price、burger_price），两个是数量（strawberry_count、burger_count）。

~hint
总价公式：

total_price = strawberry_price * strawberry_count + burger_price * burger_count

拆开看：

- strawberry_price * strawberry_count = 3 × 3 = 9 元（草莓总价）
- burger_price * burger_count = 8 × 2 = 16 元（汉堡总价）
- 9 + 16 = 25 元（总价）

Python 运算优先级：`*` 比 `+` 先算。如果不加括号，Python 自动按"先乘除后加减"的规则。
hint~

## {4. 填空}

请你补全 `total_price = ____` 这一行。

~hint
动手区：

在右栏编辑器找到：

total_price = ____

把它改成：

total_price = strawberry_price * strawberry_count + burger_price * burger_count

然后点 Run 看游戏反应——售货员会告诉你对不对。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================
strawberry_price = 3
burger_price = 8
strawberry_count = 3
burger_count = 2
total_price = strawberry_price * strawberry_count + burger_price * burger_count
# =============================================

# =============================================
# 🔒 NPC 判定区（不用看代码）
# =============================================
if total_price == 25:
    game.show_long_text("售货员：'对！总价25 元，找你0 元！'", 1)
else:
    game.show_long_text("售货员：'总价不对，再算算哦'", 1)
# =============================================
```

## {5. 练习完成 @showdialog}

参考答案：total_price = strawberry_price * strawberry_count + burger_price * burger_count

~hint
运算符组合：+ 和 * 在一个表达式里同时用，Python 会先算 * 再算 +。

这是 L1 变量 + L2 运算符的"实战"应用场景。
hint~

```python-template
# =============================================
# ✏️ 你修改的区域
# =============================================
strawberry_price = 3
burger_price = 8
strawberry_count = 3
burger_count = 2
total_price = ____
# =============================================

# =============================================
# 🔒 NPC 判定区（不用看代码）
# =============================================
if total_price == 25:
    game.show_long_text("售货员：'对！总价25 元，找你0 元！'", 1)
else:
    game.show_long_text("售货员：'总价不对，再算算哦'", 1)
# =============================================
```