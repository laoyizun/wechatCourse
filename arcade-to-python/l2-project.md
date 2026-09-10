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
背景知识（和 L1 一样）：用 sprites.create() 创建一个公主 sprite，标记为"玩家"。

setStayInScreen(True) 让玩家撞到屏幕边缘不会飞出。

具体写法参考右栏代码区。
hint~

请你先在右栏编辑器里创建公主玩家。

~hint
动手区：

找到右栏代码里 `# ★ step 2：...` 注释下面。

写两行——创建玩家 + 留在屏幕内。

具体写法参考右栏代码区的 `# step 2:` 注释。
hint~

#### ~ tutorialhint

```python
# step 2 完成后整个项目长这样：

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)  # 你这一步加的
myPlayer.setStayInScreen(True)  # 你这一步加的
```

## {3. 创建金币、魔法金币、炸弹}

第2步：创建3 种 sprite——金币、魔法金币、炸弹。

~hint
不同 sprite 用 SpriteKind 区分：

- 金币：SpriteKind.food
- 魔法金币：SpriteKind.food（同样的 SpriteKind，事件监听靠顺序区分）
- 炸弹：SpriteKind.enemy

事件监听可以按 SpriteKind 区分：

- sprites.on_overlap(player, food, ...) → 撞到金币/魔法金币
- sprites.on_overlap(player, enemy, ...) → 撞到炸弹

具体写法参考右栏代码区。
hint~

请你创建 3 个 sprite：star、magic_star、bomb。

~hint
动手区：

找到右栏代码里 `# ★ step 3：...` 注释下面。

取消整段注释（约 12 行）——三种 sprite 各 4 行（创建 + 位置 + 速度 + 反弹）。

具体写法参考右栏代码区的 `# step 3:` 注释。
hint~

#### ~ tutorialhint

```python
# step 3 完成后整个项目长这样：

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)

# 你这一步新加的：
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

- 定义生命值变量（数字 3），调用信息接口显示
- 定义分数变量（数字 0），调用信息接口显示

注意：Python 在 MakeCode 里要标注类型——数字要加 : number。

具体写法参考右栏代码区。
hint~

请你在右栏编辑器里加生命值和分数变量。

~hint
动手区：

找到右栏代码里 `# ★ step 4：...` 注释下面。

取消 4 行注释——定义 life 变量 + 显示给游戏 + 定义 score 变量 + 显示给游戏。

具体写法参考右栏代码区的 `# step 4:` 注释。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================

# 玩家创建在这一行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
life: number = 3
info.setLife(life)
score: number = 0
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
加号的实战应用：

- 分数变量 +1（撞金币）
- 分数变量 +5（撞魔法金币）

注意：函数里读写同变量要加 global。

具体写法参考右栏代码区。
hint~

请你写两个事件监听函数。

~hint
动手区：

找到右栏代码里 `# ★ step 5：...` 注释下面。

取消整段注释（约 8 行）——两个事件监听函数 + 两个注册。

注意：函数体第一行要写 `global score`。

具体写法参考右栏代码区的 `# step 5:` 注释。
hint~

#### ~ tutorialhint

```python
# step 5 完成后整个项目长这样：

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.setStayInScreen(True)
life: number = 3
info.setLife(life)
score: number = 0
info.setScore(score)

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

# 你这一步新加的：
def on_on_overlap(sprite, otherSprite):
    global score
    score = score + 1  # ← step 5: 用加号运算符把分数加 1
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap_magic(sprite, otherSprite):
    global score
    score = score + 5  # ← step 5: 用加号运算符把分数加 5
    otherSprite.setPosition(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)
```

## {6. 撞炸弹：生命值 -1（-）}

第5步：撞到炸弹时，生命值减 1。

~hint
减号的实战应用：

- 生命值变量 -1
- 然后调用信息接口让游戏显示新的生命值

注意：这一步只扣命，不动分数——分数的处理在下一步。

具体写法参考右栏代码区。
hint~

请你写炸弹的事件处理。

~hint
动手区：

找到右栏代码里 `# ★ step 6 + step 7：...` 注释下面。

取消整段注释（约 7 行）——炸弹事件处理函数 + 注册。

注意：函数里同时用到 life 和 score，所以 global 写 `global life, score`。

具体写法参考右栏代码区的 `# step 6+7:` 注释。
hint~

#### ~ tutorialhint

```python
# step 6 完成后整个项目长这样：

def on_on_overlap_bomb(sprite, otherSprite):
    global life, score
    life = life - 1  # ← step 6: 用减号运算符把生命值减 1
    info.setLife(life)  # step 6: 把新的生命值告诉游戏
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap_bomb)
```

## {7. 撞炸弹：分数减半（/）}

第6步：撞到炸弹时，**分数减半**——用除号 /。

~hint
除号的实战应用：

- 分数变量 除以 2
- 比如原来 100 分，撞到炸弹后变成 50 分
- 然后调用信息接口让游戏显示新的分数

注意：分数除以 2 后用 setScore 直接显示——MakeCode 的 setScore 接受 number 类型。

具体写法参考右栏代码区。
hint~

请你修改 on_on_overlap_bomb 函数，让分数也减半。

~hint
动手区：

在右栏代码里找到 on_on_overlap_bomb 函数。

在函数最后加两行——分数除以 2，再把新分数告诉游戏。

现在分数减半、生命值减 1 同时发生。
hint~

#### ~ tutorialhint

```python
def on_on_overlap_bomb(sprite, otherSprite):
    global life, score
    life = life - 1
    info.setLife(life)
    score = score / 2  # ← step 7: 用除号运算符把分数减半
    info.setScore(score)  # step 7: 把新的分数告诉游戏
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
# 📌 模板说明
# 整个项目从这一段开始——下面每段都用 "# step X:" 注释标好是哪一步要写的。
# 步骤里没教到的代码已用 "# " 注释掉，你不用管它。
# 走到那一步时，老师会告诉你取消注释，或者自己写新代码。
# =============================================

# ★ step 2：写创建玩家公主的两行
myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)  # step 2: 创建公主玩家
myPlayer.setStayInScreen(True)  # step 2: 让玩家撞到屏幕边缘不会飞出

# ★ step 3：写三种 sprite 的创建——取消下面整段注释
# star = sprites.create(sprites.builtin.coin0, SpriteKind.food)  # step 3: 创建普通金币
# star.setPosition(randint(0, 160), 0)  # step 3: 放在屏幕上方随机 x 坐标
# star.setVelocity(0, 50)  # step 3: 设置下落速度
# star.setBounceOnWall(True)  # step 3: 撞到屏幕底反弹
#
# magic_star = sprites.create(sprites.builtin.coin0, SpriteKind.food)  # step 3: 创建魔法金币（同样的图片）
# magic_star.setPosition(randint(0, 160), 0)  # step 3: 放在屏幕上方随机 x 坐标
# magic_star.setVelocity(0, 50)  # step 3: 设置下落速度
# magic_star.setBounceOnWall(True)  # step 3: 撞到屏幕底反弹
#
# bomb = sprites.create(sprites.castle.rock0, SpriteKind.enemy)  # step 3: 创建炸弹（用岩石当炸弹）
# bomb.setPosition(randint(0, 160), 0)  # step 3: 放在屏幕上方
# bomb.setVelocity(0, 50)  # step 3: 设置下落速度
# bomb.setBounceOnWall(True)  # step 3: 撞到屏幕底反弹

# ★ step 4：写生命值和分数变量——取消下面 4 行注释
# life: number = 3  # step 4: 定义生命值变量
# info.setLife(life)  # step 4: 把生命值告诉游戏
# score: number = 0  # step 4: 定义分数变量
# info.setScore(score)  # step 4: 把分数告诉游戏

# ★ step 5：写两个事件处理（撞金币 +1，撞魔法金币 +5）——取消下面整段注释
# def on_on_overlap(sprite, otherSprite):  # step 5: 金币碰撞处理
#     global score
#     score = score + 1  # ← step 5: 用加号运算符把分数加 1
#     otherSprite.setPosition(randint(0, 160), 0)
# sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
#
# def on_on_overlap_magic(sprite, otherSprite):  # step 5: 魔法金币碰撞处理
#     global score
#     score = score + 5  # ← step 5: 用加号运算符把分数加 5
#     otherSprite.setPosition(randint(0, 160), 0)
# sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap_magic)

# ★ step 6 + step 7：写炸弹碰撞事件（生命值 -1，分数减半）——取消下面整段注释
# def on_on_overlap_bomb(sprite, otherSprite):  # step 6+7: 炸弹碰撞处理
#     global life, score
#     life = life - 1  # ← step 6: 用减号运算符把生命值减 1
#     info.setLife(life)  # step 6: 把新的生命值告诉游戏
#     score = score / 2  # ← step 7: 用除号运算符把分数减半
#     info.setScore(score)  # step 7: 把新的分数告诉游戏
# sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap_bomb)
```