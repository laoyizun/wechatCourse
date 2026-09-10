# L2 · 运算符：让代码做计算

### @explicitHints true

## {1. 欢迎来到 L2 @showdialog}

欢迎来到 L2 运算符。

这一节课我们要学 Python 的运算符——`+`、`-`、`*`、`/`、`//`、`%`、`**` 这些符号让变量能做计算。

~hint
L1 我们学了变量——把数字存起来。

L2 我们学运算符——把存起来的数字做加减乘除。

运算符的核心是"算"，不是"调 API"。
hint~

## {2. 第一个运算符：`+` 加号}

公主的飞船在星空里飞行。飞船下方会随机掉落金币。

~hint
捡到金币，分数应该怎么变？

对了——分数要 +1。这里 +1 用的是加号运算符——把分数加 1。

至于代码怎么写，右栏代码区已经写好示例，你只需要看就行。
hint~

请你先在右栏编辑器里完成两件事：

1. 定义一个分数变量，初始值是 0
2. 玩家撞到金币时，分数加 1

~hint
动手区：

找到右栏代码里 `# ★ step 2：...` 的两段注释。

在第一段注释下面写：定义分数变量，初始值 0。

在第二段注释下面写：金币碰撞时分数 +1（用加号运算符）。

具体写法参考右栏代码区的 `# step 2:` 注释。
hint~

#### ~ tutorialhint

```python
# step 2 完成后整个项目长这样：

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
controller.moveSprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.setPosition(randint(0, 160), 0)
star.setVelocity(0, 50)
star.setBounceOnWall(True)

score: number = 0  # 你这一步加的

def on_on_overlap(sprite, otherSprite):
    global score
    score = score + 1  # 你这一步加的
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```

## {3. 倍化：`*` 乘号}

星空里还有一种特别的星星——**魔法金币**。魔法金币比普通金币值钱 5 倍！

~hint
普通金币 +1 分，魔法金币 +5 分。

魔法金币的奖励是普通金币的 5 倍——用乘号表示。

乘号的核心：把一个数放大 N 倍。

具体写法参考右栏代码区。
hint~

请你加一个魔法金币：

1. 创建 `magic_star` sprite（同样用 coin0 图片）
2. 玩家撞到 magic_star 时，score 加 5

~hint
动手区：

找到右栏代码里 `# ★ step 3：...` 的两段注释。

第一段：取消 4 行注释——创建魔法金币 sprite（取消行首 `# ` 即可）。

第二段：取消整段注释——魔法金币碰撞时分数 +5。

魔法金币和普通金币都是"食物"类型，但需要分开的事件监听。

你只需要专注在"把分数加 5"这一行——这是加号运算符的另一种应用。
hint~

#### ~ tutorialhint

```python
# step 3 完成后整个项目长这样：

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
controller.moveSprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.setPosition(randint(0, 160), 0)
star.setVelocity(0, 50)
star.setBounceOnWall(True)

score: number = 0

def on_on_overlap(sprite, otherSprite):
    global score
    score = score + 1
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

# 你这一步新加的：
magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
magic_star.setPosition(randint(0, 160), 0)
magic_star.setVelocity(0, 50)
magic_star.setBounceOnWall(True)

def on_on_overlap_magic(sprite, otherSprite):
    global score
    score = score + 5  # ← 这一步：乘号（其实是 +5，但用了"加"5 倍的思路）
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)
```

## {4. 减号：`-` 与生命值}

星空里还有炸弹——玩家撞到炸弹会扣血。

~hint
加号是 +1，减号是 -1。

减号的核心：把数减小。

具体写法参考右栏代码区。
hint~

请你加一个炸弹 sprite，并写它的碰撞处理：

1. 创建 bomb sprite
2. 玩家撞到 bomb 时，life 减 1

~hint
动手区：

找到右栏代码里 `# ★ step 4：...` 的四段注释。

第一段：取消 2 行注释——定义生命值变量并显示给游戏。

第二段：取消 4 行注释——创建炸弹 sprite（用岩石当炸弹）。

第三段：取消整段注释——炸弹碰撞时生命值 -1 并通知游戏。

注意：生命值用 life 变量存储，更灵活——以后改 life 的初始值就是几条命。

具体写法参考右栏代码区的 `# step 4:` 注释。
hint~

#### ~ tutorialhint

```python
# step 4 完成后整个项目长这样：

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
controller.moveSprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.setPosition(randint(0, 160), 0)
star.setVelocity(0, 50)
star.setBounceOnWall(True)

score: number = 0

def on_on_overlap(sprite, otherSprite):
    global score
    score = score + 1
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
magic_star.setPosition(randint(0, 160), 0)
magic_star.setVelocity(0, 50)
magic_star.setBounceOnWall(True)

def on_on_overlap_magic(sprite, otherSprite):
    global score
    score = score + 5
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)

# 你这一步新加的：
life: number = 3  # 你这一步加的
info.setLife(life)

bomb = sprites.create(sprites.castle.rock0, SpriteKind.enemy)
bomb.setPosition(randint(0, 160), 0)
bomb.setVelocity(0, 50)
bomb.setBounceOnWall(True)

def on_on_overlap_bomb(sprite, otherSprite):
    global life
    life = life - 1  # ← 这一步：减号运算符
    info.setLife(life)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap_bomb)
```

## {5. 综合演示：超市收银}

我们已经学了 `+`、`-`、`*`——这些是**基本算术运算符**。

~hint
运算符的核心是"做计算"。常见的运算模式：

- 累加：每次加一点（用加号）
- 倍化：放大倍数（用乘号）
- 减扣：每次减一点（用减号）

接下来 L2 中段的练习会综合应用这些运算符——做一个"超市收银系统"。

到练习 1 会见到：
- 草莓 3 元/个
- 汉堡 8 元/个
- 算 3 草莓 + 2 汉堡的总价

你需要用乘号和加号算出来：3 乘 3 加 8 乘 2 等于 25 元
hint~

继续看下一关，进入练习 1。

```python-template
# =============================================
# 📌 模板说明
# 整个项目从这一段开始——下面每行都用 "# step X:" 注释标好是哪一步要写的。
# 步骤里没教到的代码已用 "# " 注释掉，你不用管它。
# 走到那一步时，老师会告诉你取消注释，或者自己写新代码。
# =============================================

# 创建公主玩家（开箱即用）
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
controller.moveSprite(myPlayer, 100, 100)

# 创建普通金币（开箱即用）
star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.setPosition(randint(0, 160), 0)
star.setVelocity(0, 50)
star.setBounceOnWall(True)

# ★ step 2：在"你修改的区域"加一行——定义分数变量并设初始值 0
score: number = 0  # step 2: 定义分数变量

# ★ step 2：写完分数变量后，再写撞到金币时分数 +1 的事件
def on_on_overlap(sprite, otherSprite):  # step 2: 金币碰撞处理
    global score
    score = score + 1  # ← step 2: 用加号运算符把分数加 1
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

# ★ step 3：取消下面三行的注释——创建魔法金币（同样的 coin0 图片）
# magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)  # step 3: 创建魔法金币
# magic_star.setPosition(randint(0, 160), 0)  # step 3: 放在屏幕上方随机位置
# magic_star.setVelocity(0, 50)  # step 3: 设置下落速度
# magic_star.setBounceOnWall(True)  # step 3: 撞到屏幕底反弹

# ★ step 3：取消下面整段注释——魔法金币的碰撞处理（分数加 5）
# def on_on_overlap_magic(sprite, otherSprite):  # step 3: 魔法金币碰撞
#     global score
#     score = score + 5  # ← step 3: 用加号运算符把分数加 5
#     otherSprite.setPosition(randint(0, 160), 0)
# sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)

# ★ step 4：取消下面两行——定义生命值变量并初始化游戏
# life: number = 3  # step 4: 定义生命值变量
# info.setLife(life)  # step 4: 把生命值告诉游戏（这样屏幕右上角会显示心形图标）

# ★ step 4：取消下面三行——创建炸弹 sprite
# bomb = sprites.create(sprites.castle.rock0, SpriteKind.enemy)  # step 4: 创建炸弹
# bomb.setPosition(randint(0, 160), 0)  # step 4: 放在屏幕上方
# bomb.setVelocity(0, 50)  # step 4: 设置下落速度
# bomb.setBounceOnWall(True)  # step 4: 撞到屏幕底反弹

# ★ step 4：取消下面整段注释——炸弹的碰撞处理（生命值减 1）
# def on_on_overlap_bomb(sprite, otherSprite):  # step 4: 炸弹碰撞
#     global life
#     life = life - 1  # ← step 4: 用减号运算符把生命值减 1
#     info.setLife(life)  # step 4: 把新的生命值告诉游戏
# sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap_bomb)
```