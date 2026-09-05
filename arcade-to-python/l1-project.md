# L1 长项目 · 星际冒险基础版

### @explicitHints true

## {1. 项目说明 @showdialog}

欢迎来到 L1 长项目：星际冒险基础版。

前面 3 个练习你学了变量定义、改值、引用——现在要把这些用起来，从零搭一个完整的小游戏：

- 玩家是一个公主
- 公主能上下左右移动
- 金币从天上掉下来
- 撞到金币就加分
- 还有 3 条生命

整个项目一共 7 个步骤，每一步只让你写 1–3 行新代码。

~hint
做完这 7 个步骤，你会得到一个能跑的小游戏——这是你用 Python 写的第一个完整游戏！

每一步都会有一个"任务"和"动手区"。动手区告诉你要在右栏编辑器里加哪一行/改哪一行。
hint~

## {2. 创建玩家}

第 1 步：创建玩家公主。

~hint
背景知识：MakeCode Arcade 里 sprites.create(...) 可以创建一个角色（sprite）。第一个参数是图片，第二个参数是"角色种类"（SpriteKind）。

SpriteKind.player 是"玩家"，SpriteKind.food 是"敌人"或"食物"——名字不强制，但推荐用常见的。
hint~

请你先在右栏编辑器里完成以下两件事：

1. 在顶部"# 玩家创建在这一行"下面创建一个公主 sprite
2. 让玩家不会飞出屏幕（`set_stay_in_screen(True)`）

~hint
动手区：

找到右栏代码顶部"# 你修改的区域"注释下面的"# 玩家创建在这一行"，在它下面写：

`myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)`

然后写：

`myPlayer.set_stay_in_screen(True)`

这两行代码做了什么：

- 第 1 行：创建一个图片是公主的 sprite，标记为"玩家"
- 第 2 行：让玩家撞到屏幕边缘不会飞出
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
# =============================================
```

## {3. 让玩家可以移动}

第 2 步：让玩家用方向键移动。

~hint
背景知识：controller.move_sprite(sprite, vx, vy) 让玩家可以用方向键移动。

- vx 是水平速度（100 表示每秒 100 像素）
- vy 是垂直速度
- 100, 100 是个比较舒服的速度
hint~

请你添加一行，让玩家可以用方向键移动（速度 100, 100）。

~hint
动手区：

在"myPlayer.set_stay_in_screen(True)"后面加一行：

`controller.move_sprite(myPlayer, 100, 100)`

现在按方向键，玩家应该可以动了。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)
# =============================================
```

## {4. 创建金币}

第 3 步：创建金币让它从天上掉下来。

~hint
背景知识：

- sprites.create(sprites.builtin.coin0, SpriteKind.food)：创建一个金币 sprite，标记为"食物"
- set_position(randint(0, 160), 0)：随机放在顶部（x 是 0-160 之间随机，y 是 0）
- set_velocity(0, 50)：垂直方向速度 50（金币下落速度）
- set_bounce_on_wall(True)：撞到墙会反弹
hint~

请你创建一个金币，让它从屏幕顶部（随机 x）开始下落，下落速度 50，撞到墙会反弹。

~hint
动手区：

在"# 玩家创建"区域后面写 4 行：

`star = sprites.create(sprites.builtin.coin0, SpriteKind.food)`
`star.set_position(randint(0, 160), 0)`
`star.set_velocity(0, 50)`
`star.set_bounce_on_wall(True)`

点 Run 看效果——金币应该从屏幕顶部出现并下落。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)
# =============================================

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)
```

## {5. 加生命值（变量定义 + 引用）}

第 4 步：用变量保存生命值。

~hint
为什么要用变量？

如果直接把数字 3 写进 info.set_life(3)，以后想改"5 条命"就要改两处。

用变量 life = 3 → info.set_life(life)，以后改"5 条命"只改 1 处（life = 5）。这就是变量的好处。
hint~

请你：

1. 在"# 玩家创建"区域加一行 `life = 3`
2. 把 info.set_life(3) 这一行括号里的 3 改成 life

~hint
动手区：

在 controller.move_sprite(...) 后面加：

`life = 3`

然后找到 info.set_life(3) 这一行，把 3 改成 life：

`info.set_life(life)`

现在游戏会有 3 条生命。改 life = 5 试试看生命值会变。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)
life = 3
info.set_life(life)
# =============================================

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)
```

## {6. 加分数（变量定义 + 引用）}

第 5 步：用变量保存分数。

~hint
跟生命值一样的思路——用 score = 0 → info.set_score(score)，以后改初始分数只改一处。
hint~

请你：

1. 在"# 玩家创建"区域加一行 `score = 0`
2. 把 info.set_score(0) 这一行的 0 改成 score

~hint
动手区：

在 info.set_life(life) 后面加：

`score = 0`

然后找到 info.set_score(0) 这一行，把 0 改成 score：

`info.set_score(score)`

现在游戏从 0 分开始。改 score = 100 试试看初始分数会变。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)
life = 3
info.set_life(life)
score = 0
info.set_score(score)
# =============================================

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)
```

## {7. 撞星加分（变量改值）}

第 6 步：让玩家撞到金币时分数 +1。

~hint
背景知识：sprites.on_overlap(类型1, 类型2, 回调函数) 是一个"事件监听器"——当两个 sprite 撞在一起时，自动调用回调函数。

这里监听的是"玩家撞到食物"。
hint~

请你写一个 on_on_overlap 函数：

- 当玩家撞到金币
- info.change_score_by(score) 加分
- 把金币移到屏幕顶部的新位置

~hint
动手区：

在 star.set_bounce_on_wall(True) 后面写：

`def on_on_overlap(sprite, otherSprite):`
`    info.change_score_by(score)`
`    otherSprite.set_position(randint(0, 160), 0)`

然后再写：

`sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)`

注意：change_score_by(score) 用的是变量 score，所以如果改 score = 5，每次撞星就 +5 分。这就是"只改一处"的威力。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)
life = 3
info.set_life(life)
score = 0
info.set_score(score)
# =============================================

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(score)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```

## {8. 项目完成 @showdialog}

恭喜！你刚刚用 Python 写了一个完整的小游戏。

~hint
完成清单：

- 公主可以移动
- 金币从天上掉下来
- 撞到金币加分
- 3 条生命

试着改改以下变量，看看游戏会怎么变：

- life = 5（生命值变成 5）
- score = 100（初始分数变成 100）
- 重新 Run 看看效果
hint~

这一节你真正掌握的 3 个能力：

1. 变量定义：用 `life = 3`、`score = 0` 把数字存起来
2. 变量引用：用 `info.set_life(life)`、`info.set_score(score)` 把变量值传出去
3. 变量改值：`score = 5` 之后，所有用到 score 的地方都会自动用新值

~hint
下一步预告：L2 我们会学"运算符"——用 `score = score + 10` 让分数每次自动 +10，而不用 hardcode。

把这一节课的 4 个分享链接（5 个练习链接）收藏起来——以后忘了可以随时点开看。
hint~