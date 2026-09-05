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

对了——分数要 +1！这里 +1 用的是加号运算符：score = score + 1
hint~

请你先在右栏编辑器里完成两件事：

1. 定义一个分数变量 score = 0
2. 玩家撞到金币时，score 加 1

~hint
动手区：

找到右栏代码顶部 "# 你修改的区域" 注释下面。

加一行：`score = 0`

然后找到 on_on_overlap 函数，加一行：`score = score + 1`

两行代码做了什么：

- score = 0：创建变量，初始值是 0
- score = score + 1：每次撞到金币，score 加 1（用加号运算符）
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================
score = 0
# =============================================

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    score = score + 1
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```

## {3. 倍化：`*` 乘号}

星空里还有一种特别的星星——**魔法金币**。魔法金币比普通金币值钱 5 倍！

~hint
普通金币 +1 分，魔法金币 +5 分。

魔法金币的奖励是普通金币的 5 倍——用乘号 `*` 表示：

score = score + 5

或者：

score = score + 1 * 5

或者更简洁：

score = score * 5

乘号的核心：把一个数放大 N 倍。
hint~

请你加一个魔法金币：

1. 创建 `magic_star` sprite（同样用 coin0 图片）
2. 玩家撞到 magic_star 时，score 加 5

~hint
动手区：

在"# 你修改的区域"下面加：

magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
magic_star.set_position(randint(0, 160), 0)
magic_star.set_velocity(0, 50)
magic_star.set_bounce_on_wall(True)

魔法金币和普通金币都是 SpriteKind.food，但需要分开的事件监听：

sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

—— 这是玩家撞到任何 food（金币/魔法金币），都会调用 on_on_overlap。

在 on_on_overlap 里，可以用 sprite 来区分撞到的是哪个：

def on_on_overlap(sprite, otherSprite):
    if otherSprite == magic_star:
        score = score + 5
    else:
        score = score + 1

但等等——我们这节课还没学 if/else。

简化版：先只用一个魔法金币事件，on_on_overlap_magic：

def on_on_overlap_magic(sprite, otherSprite):
    score = score + 5
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)

你只需要专注在 score = score + 5 这一行——这是 * 运算符的用法。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================
score = 0
# =============================================

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
magic_star.set_position(randint(0, 160), 0)
magic_star.set_velocity(0, 50)
magic_star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    score = score + 1
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap_magic(sprite, otherSprite):
    score = score + 5
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)
```

## {4. 减号：`-` 与生命值}

星空里还有炸弹——玩家撞到炸弹会扣血。

~hint
加号是 +1，减号是 -1。

扣血的写法：

info.set_life(info.life() - 1)

或者用变量 life：

life = 3
life = life - 1
info.set_life(life)

减号的核心：把数减小。
hint~

请你加一个炸弹 sprite，并写它的碰撞处理：

1. 创建 bomb sprite
2. 玩家撞到 bomb 时，life 减 1

~hint
动手区：

在"# 你修改的区域"下面加：

life = 3

然后加 bomb：

bomb = sprites.create(sprites.castle.rock0, SpriteKind.enemy)
bomb.set_position(randint(0, 160), 0)
bomb.set_velocity(0, 50)
bomb.set_bounce_on_wall(True)

加事件：

def on_on_overlap_bomb(sprite, otherSprite):
    life = life - 1
    info.set_life(life)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap_bomb)

注意：生命值用 life 变量存储，更灵活——以后改 life = 5 就是 5 条命。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================
score = 0
life = 3
info.set_life(life)
# =============================================

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
magic_star.set_position(randint(0, 160), 0)
magic_star.set_velocity(0, 50)
magic_star.set_bounce_on_wall(True)

bomb = sprites.create(sprites.castle.rock0, SpriteKind.enemy)
bomb.set_position(randint(0, 160), 0)
bomb.set_velocity(0, 50)
bomb.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    score = score + 1
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap_magic(sprite, otherSprite):
    score = score + 5
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)

def on_on_overlap_bomb(sprite, otherSprite):
    life = life - 1
    info.set_life(life)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap_bomb)
```

## {5. 综合演示：超市收银}

我们已经学了 `+`、`-`、`*`——这些是**基本算术运算符**。

~hint
运算符的核心是"做计算"。常见的运算模式：

- 累加：score = score + 1（每次加一点）
- 倍化：score = score * 5（放大倍数）
- 减扣：life = life - 1（每次减一点）

接下来 L2 中段的练习会综合应用这些运算符——做一个"超市收银系统"。

到练习 1 会见到：
- 草莓 3 元/个
- 汉堡 8 元/个
- 算 3 草莓 + 2 汉堡的总价

你需要用 `*` 和 `+` 算出来：3 * 3 + 8 * 2 = 25 元
hint~

继续看下一关，进入练习 1。

```python-template
# =============================================
# ✏️ 你修改的区域
# =============================================
score = 0
life = 3
info.set_life(life)
# =============================================

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
magic_star.set_position(randint(0, 160), 0)
magic_star.set_velocity(0, 50)
magic_star.set_bounce_on_wall(True)

bomb = sprites.create(sprites.castle.rock0, SpriteKind.enemy)
bomb.set_position(randint(0, 160), 0)
bomb.set_velocity(0, 50)
bomb.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    score = score + 1
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap_magic(sprite, otherSprite):
    score = score + 5
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)

def on_on_overlap_bomb(sprite, otherSprite):
    life = life - 1
    info.set_life(life)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap_bomb)
```