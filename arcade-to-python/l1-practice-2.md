# L1 独立练习 2 · 改错（变量名大小写）

### @explicitHints true

## {1. 练习说明 @showdialog}

欢迎来到 L1 独立练习 2。

本练习是"改错"——右栏代码运行会报错，请你找出错误并修正。

~hint
复习一下前段学的。

变量名要保持一致：定义时怎么写，使用时就怎么写。一个字母大小写不同，Python 就认为是两个变量。
hint~

## {2. 运行代码}

请在右侧的 Python 编辑器中运行代码，看看会发生什么。

~hint
游戏跑起来了，玩家也能移动。

但是分数好像没增加？或者报错了？

仔细看代码里所有出现 score 的地方——有的写成了 Score。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================
score = 1
info.set_score(score)
# =============================================

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(Score)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```

## {3. 问题在哪？ @showdialog}

代码里 score 出现了好几次，但有一处的大小写跟别的不一样。

顶部第 1 行写的是 score = 1（全小写）。第 2 行 info.set_score(score) 也用的小写。

但是 on_on_overlap 函数里写的是 info.change_score_by(Score)，括号里的 Score 首字母大写。

Python 的规则：

变量名是区分大小写的。score 和 Score 在 Python 眼里是两个不同的变量。

顶部定义了 score（小写），但 on_on_overlap 里写成 Score 的那一行，Python 会去找"还没定义过的 Score"，于是报错。

~hint
为什么 Python 要这么严格？

想象你有两个贴了不同标签的盒子：score（全小写）和 Score（首字母大写）。

你只在 score 盒子里放了 1，却从 Score 盒子里取东西——Score 盒子里是空的，所以 Python 告诉你"没有定义"。

这种"看起来几乎一样、其实不一样"的错误，是 Python 初学者最常踩的坑之一。
hint~

## {4. 修复错误}

请你修复这个错误——把 on_on_overlap 函数里 info.change_score_by(...) 这一行括号中的 Score 改成 score，让所有 score 大小写一致。

~hint
修复要点：

1. 在右栏编辑器里找到 on_on_overlap 函数
2. 找到 info.change_score_by(...) 这一行
3. 把括号里的 Score 改成 score
4. 顶部 score = 1 不用改

改完后再运行一次试试——这次分数应该每次撞星 +1。
hint~

#### ~ tutorialhint

```python
# =============================================
# ✏️ 你修改的区域
# =============================================
score = 1
info.set_score(score)
# =============================================

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
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

参考答案：on_on_overlap 函数里 info.change_score_by(Score) 改成 info.change_score_by(score)。

~hint
现在撞星时分数 +1。

Python 变量名黄金法则：全小写 snake_case（比如 player_life、max_speed），一旦定下来就全篇保持一致。报错时第一反应：看拼写、看大小写。

下一关是练习 3：变量覆盖（在 on_on_overlap 里偷偷改变量值）。
hint~

```python-template
# =============================================
# ✏️ 玩家可以修改的区域
# =============================================
score = 1
info.set_score(score)
# =============================================

myPlayer = sprites.create(sprites.castle.princessFront0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(Score)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```