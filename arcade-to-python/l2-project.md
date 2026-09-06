# L2 长项目 · 星际冒险·炸弹减半

### @explicitHints true

## {1. 项目说明 @showdialog}

欢迎来到 L2 长项目：星际冒险·炸弹减半版。

L1 你做了一个基础版游戏——公主 + 金币 + 计分。

L2 我们加新机制：

- 公主 + 金币 + 魔法金币 + 炸弹
- 金币 +1 分
- 魔法金币 +5 分
- 撞到炸弹：生命值 -1，**并且分数减半**

~hint
这一节你会用上 L1 学到的：

- 变量定义和引用
- 事件监听

加上 L2 学到的运算符：

- + 加分
- - 减命
- * 倍化（魔法金币）
- / 除法（分数减半）

整个项目一共 7 个步骤，每步只让你写 1-3 行新代码。
hint~

## {2. 创建玩家}

第1步：创建玩家公主。

~hint
背景知识（和 L1 一样）：sprites.create(sprites.castle.princessFront0, SpriteKind.player) 创建一个公主 sprite，标记为"玩家"。

setStayInScreen(True) 让玩家撞到屏幕边缘不会飞出。
hint~

请你先在右栏编辑器里创建公主玩家。

~hint
动手区：

找到"# 你修改的区域"下面的注释 "# 玩家创建在这一行"，在它下面写：

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
# =============================================
```

## {3. 创建金币、魔法金币、炸弹}

第2步：创建3 种 sprite——金币、魔法金币、炸弹。

~hint
不同 sprite 用 SpriteKind 区分：

- 金币：SpriteKind.food
- 魔法金币：SpriteKind.food（用 setImage 区分）
- 炸弹：SpriteKind.enemy

事件监听可以按 SpriteKind 区分：

- sprites.on_overlap(player, food, ...) → 撞到金币/魔法金币
- sprites.on_overlap(player, enemy, ...) → 撞到炸弹
hint~

请你创建 3 个 sprite：star、magic_star、bomb。

~hint
动手区：

在"# 你修改的区域"后面写：

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.setPosition(randint(0, 160), 0)
star.setVelocity(0, 50)
star.setBounceOnWall(True)

magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
magic_star.setPosition(randint(0, 160), 0)
magic_star.setVelocity(0, 50)
magic_star.setBounceOnWall(True)

bomb = sprites.create(sprites.castle.rock0, SpriteKind.enemy)
bomb.setPosition(randint(0, 160), 0)
bomb.setVelocity(0, 50)
bomb.setBounceOnWall(True)
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
# =============================================

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.setPosition(randint(0, 160), 0)
star.setVelocity(0, 50)
star.setBounceOnWall(True)

magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
magic_star.setPosition(randint(0, 160), 0)
magic_star.setVelocity(0, 50)
magic_star.setBounceOnWall(True)

bomb = sprites.create(sprites.castle.rock0, SpriteKind.enemy)
bomb.setPosition(randint(0, 160), 0)
bomb.setVelocity(0, 50)
bomb.setBounceOnWall(True)
```

## {4. 加生命值 + 分数（变量定义 + 引用）}

第3步：用变量保存生命值和分数。

~hint
跟 L1 一样——用变量 life 和 score，比 hardcode 数字更灵活：

life = 3
info.setLife(life)

score = 0
info.setScore(score)
hint~

请你在"# 你修改的区域"加生命值和分数变量。

~hint
动手区：

在 controller 后面加（如果有 controller 的话）：

life = 3
info.setLife(life)

score = 0
info.setScore(score)
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
life = 3
info.setLife(life)
score = 0
info.setScore(score)
# =============================================

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.setPosition(randint(0, 160), 0)
star.setVelocity(0, 50)
star.setBounceOnWall(True)

magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
magic_star.setPosition(randint(0, 160), 0)
magic_star.setVelocity(0, 50)
magic_star.setBounceOnWall(True)

bomb = sprites.create(sprites.castle.rock0, SpriteKind.enemy)
bomb.setPosition(randint(0, 160), 0)
bomb.setVelocity(0, 50)
bomb.setBounceOnWall(True)
```

## {5. 撞星 +1，撞魔法金币 +5（+, *）}

第4步：写两个事件——撞金币 +1，撞魔法金币 +5。

~hint
加号和乘号的实战应用：

- score = score + 1（撞金币）
- score = score + 5（撞魔法金币）

这里 +5 也可以写成 score = score * 5 * 1，但 + 5 更直观。
hint~

请你写两个事件监听函数。

~hint
动手区：

在 bomb 后面写：

def on_on_overlap(sprite, otherSprite):
    score = score + 1
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap_magic(sprite, otherSprite):
    score = score + 5
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
life = 3
info.setLife(life)
score = 0
info.setScore(score)
# =============================================

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.setPosition(randint(0, 160), 0)
star.setVelocity(0, 50)
star.setBounceOnWall(True)

magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
magic_star.setPosition(randint(0, 160), 0)
magic_star.setVelocity(0, 50)
magic_star.setBounceOnWall(True)

bomb = sprites.create(sprites.castle.rock0, SpriteKind.enemy)
bomb.setPosition(randint(0, 160), 0)
bomb.setVelocity(0, 50)
bomb.setBounceOnWall(True)

def on_on_overlap(sprite, otherSprite):
    score = score + 1
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap_magic(sprite, otherSprite):
    score = score + 5
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)
```

## {6. 撞炸弹：生命值 -1（-）}

第5步：撞到炸弹时，生命值减 1。

~hint
减号的实战应用：

life = life - 1

然后 info.setLife(life) 让游戏显示新的生命值。
hint~

请你写炸弹的事件处理。

~hint
动手区：

在 on_on_overlap_magic 后面写：

def on_on_overlap_bomb(sprite, otherSprite):
    life = life - 1
    info.setLife(life)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap_bomb)

注意：这里只扣命，不动分数——分数的处理在下一步。
hint~

#### ~ tutorialhint

```python
def on_on_overlap_bomb(sprite, otherSprite):
    life = life - 1
    info.setLife(life)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap_bomb)
```

## {7. 撞炸弹：分数减半（/）}

第6步：撞到炸弹时，**分数减半**——用除号 /。

~hint
除号的实战应用：

score = score / 2 # 把分数除以 2

比如原来 100 分，撞到炸弹后变成 50 分。

用 info.setScore(score) 让游戏显示新的分数。
hint~

请你修改 on_on_overlap_bomb 函数，让分数也减半。

~hint
动手区：

修改 on_on_overlap_bomb 函数：

def on_on_overlap_bomb(sprite, otherSprite):
    life = life - 1
    info.setLife(life)
    score = score / 2 # 新增这一行
    info.setScore(score) # 新增这一行

现在分数减半、生命值减1 同时发生。
hint~

#### ~ tutorialhint

```python
def on_on_overlap_bomb(sprite, otherSprite):
    life = life - 1
    info.setLife(life)
    score = score / 2
    info.setScore(score)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap_bomb)
```

## {8. 项目完成 @showdialog}

恭喜！你刚刚做了一个完整的"炸弹减半版"游戏。

~hint
完成清单：

- 公主可以移动
- 金币 +1
- 魔法金币 +5
- 炸弹：生命值 -1 + 分数减半

这一节你把 L1 + L2 的知识串起来了：

- L1 变量：life, score
- L2 运算符：+, -, *, /

下一步预告：L3 学 if/else——可以根据条件执行不同代码。
hint~

把这一节课的 4 个分享链接收藏起来——以后忘了可以随时点开看。

```python-template
# =============================================
# ✏️ 玩家可以修改的区域（从这里开始动手）
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
life = 3
info.setLife(life)
score = 0
info.setScore(score)
# =============================================

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.setPosition(randint(0, 160), 0)
star.setVelocity(0, 50)
star.setBounceOnWall(True)

magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
magic_star.setPosition(randint(0, 160), 0)
magic_star.setVelocity(0, 50)
magic_star.setBounceOnWall(True)

bomb = sprites.create(sprites.castle.rock0, SpriteKind.enemy)
bomb.setPosition(randint(0, 160), 0)
bomb.setVelocity(0, 50)
bomb.setBounceOnWall(True)

def on_on_overlap(sprite, otherSprite):
    score = score + 1
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap_magic(sprite, otherSprite):
    score = score + 5
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)

def on_on_overlap_bomb(sprite, otherSprite):
    life = life - 1
    info.setLife(life)
    score = score / 2
    info.setScore(score)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap_bomb)
```