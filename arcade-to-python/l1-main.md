# L1 · 变量：让游戏记住数字

### @explicitHints true

## {1. 欢迎 @showdialog}

欢迎来到"arcade->python"课程的第一节课：变量。

今天我们用 Python 编程语言，学习计算机如何"记住"一个数字。

在这一节课里，我们会：

- 认识"变量"是什么
- 学会用 Python 创建一个变量
- 学会改变一个变量的值
- 在 MakeCode 游戏中看到变量的作用

~hint
本节课共 5 个步骤。每一步都会引导你在右栏代码里"动手写一行"。

如果你在某些步骤卡住了，可以随时点开 hint 折叠区查看提示。
hint~

## {2. 变量是什么？}

**你有没有过这种情况？**

- 玩《超级马里奥》时，头顶那个"剩余生命数"一开始是 3，被怪物撞一下变成 2
- 玩《俄罗斯方块》时，右上角的分数从 0 开始，每消一行就 +10

这些**会变化的数字**都存在一个地方：叫做"**变量**"。

今天我们用 Python 来认识它。

~hint
变量就像一个贴了标签的盒子。

盒子上写什么名字，盒子里就放什么数字。

比如写 life 的盒子放 3，就代表"生命值是 3"。
hint~

#### ~ tutorialhint

```python
# 变量：用一个名字存一个数字
score = 0
life = 3
```

## {3. 第一个变量：定义生命值}

**在 Python 里，我们用 `=` 给变量"放东西"进去：**

`life = 3`

这句话的意思是：**创建一个叫 `life` 的变量，把数字 3 放进去**。

---

- :mouse pointer: **现在到右栏代码区动手写**
- :tree: 找到第一行 `life = ____`，把数字 `3` 填进去

~hint
注意！等号在 Python 里不是"等于"的意思，而是"把右边的东西放到左边"。

"life = 3" 读作：把 3 放进 life 这个盒子里。

不是"life 等于 3"——那是数学里的意思。
hint~

#### ~ tutorialhint

```python
# ✏️ 你修改的区域
life = 3
info.set_life(life)
my_variable = 0
# ===========================

myPlayer = sprites.create(sprites.castle.princess_front0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

info.set_score(0)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```

## {4. 让游戏知道我们的生命值}

**变量定义好了，但游戏还不知道。**

MakeCode 有一个指令叫 `info.set_life`，它的作用是"把游戏里的生命值设成某个数字"。

我们把变量 `life` 传给它：

`info.set_life(life)`

---

- :mouse pointer: 在右栏代码里找到 `info.set_life(____)` 这一行，把变量名 `life` 填进去

~hint
现在我们做了两件事。

第一件：life = 3 创建一个叫 life 的盒子，里面放数字 3。

第二件：info.set_life(life) 把 life 盒子里的数字告诉给游戏。

游戏看到 life 是 3，就把生命值显示成 3。
hint~

#### ~ tutorialhint

```python
# ✏️ 你修改的区域
life = 3
info.set_life(life)
my_variable = 0
# ===========================

myPlayer = sprites.create(sprites.castle.princess_front0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

info.set_score(0)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```

## {5. 运行游戏试试看}

**按"运行"按钮启动游戏。**

你应该能在屏幕右上角看到**生命值显示为 3**——这正是你写的 `life = 3` 和 `info.set_life(life)` 告诉游戏的。

变量就是这么工作的：用一个名字存一个数字，然后游戏可以用这个数字。

~hint
这一步没有新代码要写，只是让你体验一下变量的作用。

如果你能看到生命值显示为 3，说明你已经成功地把"变量"用到了游戏里！
hint~

#### ~ tutorialhint

```python
# ✏️ 你修改的区域
life = 3
info.set_life(life)
my_variable = 0
# ===========================

myPlayer = sprites.create(sprites.castle.princess_front0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

info.set_score(0)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```

## {6. 自己起一个变量名}

**变量名不一定要叫 `life`——你可以用任何你想要的名字。**

试着自己起一个变量名，比如：

- `hp`（血量，常见游戏术语）
- `power`（能量）
- `shield`（护盾）

---

- :mouse pointer: 找到 `my_variable = ____` 这一行，把数字 10 填进去。这就是你自己定义的变量！

~hint
变量名命名的规则。

可以用英文（推荐）、数字、下划线。不能以数字开头，不能用 Python 关键字（class、def、return 等）。

"life = 3" 和 "my_variable = 10" 都是赋值（创建变量并放数字）。只是名字不同，写法完全一样。
hint~

#### ~ tutorialhint

```python
# ✏️ 你修改的区域
life = 3
info.set_life(life)
my_variable = 10
# ===========================

myPlayer = sprites.create(sprites.castle.princess_front0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

info.set_score(0)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```

## {7. 前段完成！}

**前段 5 步已经学完！**

你已经掌握了 Python 变量的两个基本操作：

- 定义变量：`变量名 = 数字`
- 改值：`变量名 = 变量名 + 数字`

接下来进入"中段"——3 个独立练习。每个练习在一个独立的 tutorial 页面里完成。

~hint
做完 3 个练习后，进入"长项目"，把变量用到"星际冒险"游戏里。

后续 L2、L3、L4 等课程会继续在"星际冒险"游戏里增加新的机制。
hint~

```python-template
# ===========================
# ✏️ 你修改的区域
# ===========================
life = ____
info.set_life(____)
my_variable = ____
# ===========================

myPlayer = sprites.create(sprites.castle.princess_front0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

info.set_score(0)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```
