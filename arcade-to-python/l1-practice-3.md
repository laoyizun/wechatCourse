# L1 独立练习 3 · 改错（变量覆盖）

### @explicitHints true

## {1. 练习说明 @showdialog}

欢迎来到 L1 独立练习 3。

本练习是"改错"——右栏代码里 score 这个变量在某个地方被偷偷"换成"了别的东西。

~hint
复习：

变量赋值用 变量名 = 数字。

同一个变量名只能保存一个值——后面赋的值会把前面覆盖掉。
hint~

## {2. 运行代码}

请在右侧的 Python 编辑器中**运行**代码，看看会发生什么。

~hint
游戏会跑起来，玩家也能移动。

但是——分数好像不太对劲？

仔细看代码里所有出现 score 的地方，找一找哪里"偷偷"给它赋了一个奇怪的值。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================
score = 1
info.set_score(score)
# =============================================

myPlayer = sprites.create(sprites.castle.princess_front0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    score = "小明"
    info.change_score_by(score)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```

## {3. 问题在哪？ @showdialog}

代码里 score 出现了好几次：

1. 顶部 score = 1（数字 1）
2. on_on_overlap 里 info.change_score_by(score)
3. on_on_overlap 里还藏了一行 score = "小明"（字符串！）

Python 的规则：

同一个变量名只能保存一个值。

当代码运行到 score = "小明" 时，score 就从数字 1 变成了字符串"小明"。

然后 info.change_score_by(score) 想把 score 当数字加进去，但 score 已经是字符串了——所以报错。

~hint
变量赋值就像给盒子换内容。

第一次 score = 1，盒子里放 1。

第二次 score = "小明"，盒子里的 1 被拿走，换成了"小明"。

第三行 change_score_by(score) 想把盒子里的东西加到分数上——但"小明"加不进去。
hint~

## {4. 修复错误}

请你修复这个错误——在右栏编辑器里删掉那行偷偷的赋值，让 score 一直是数字。

~hint
修复思路：

1. 在右栏编辑器里搜 "score"（Ctrl+F 或 Cmd+F）
2. 找到所有 score = 的行
3. 找出哪一行的"="右边不是数字
4. 删掉那一行
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================
score = 1
info.set_score(score)
# =============================================

myPlayer = sprites.create(sprites.castle.princess_front0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(score)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```

## {5. 练习完成 @showdialog}

参考答案：在 on_on_overlap 函数里，删掉 score = "小明" 这一行。

~hint
现在 score 一直保持数字，每次撞星就 +1。

变量赋值的黄金法则：一个变量最好只赋值一次（在开头定义），避免后面"偷偷"覆盖。
hint~

```python-template
# =============================================
# ✏️ 玩家可以修改的区域
# =============================================
score = 1
info.set_score(score)
# =============================================

myPlayer = sprites.create(sprites.castle.princess_front0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    score = "小明"
    info.change_score_by(score)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```