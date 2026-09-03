# L1 独立练习 1 · 改错

### @explicitHints true
### @preferredEditor python

## 练习说明 @showdialog

欢迎来到 L1 独立练习 1。

本练习是"改错"——右栏代码运行会报错，请你找出错误并修正。

~hint
复习一下前段学的。

变量在使用前必须先定义（用 变量名 = 数字 给它一个值），否则会报错。
hint~

## Step 1

请在右侧的 Python 编辑器中运行代码，看看会发生什么。

~hint
游戏会运行，但是分数好像没增加？或者会报错？

仔细看代码里 info.change_score_by(score) 这一行——score 这个变量好像没有出现在等号左边。
hint~

请阅读右栏的代码，思考哪里出了问题。

## Step 2 @showdialog

问题在哪？

代码里用了 score 这个变量，但是从头到尾没有给 score 赋过值（score = 数字）。

Python 不允许"使用未定义的变量"——所以 info.change_score_by(score) 会报错。

~hint
变量在 Python 里必须先定义、后使用。

如果想"每次吃到星星 +10 分"，你需要先写 score = 10，然后 info.change_score_by(score) 才会成功。
hint~

## Step 3

请你修复这个错误——在右栏编辑器里加一行 score = 10（放在 info.set_score(0) 上面），让游戏每次吃到星星 +10 分。

~hint
修复要点：

1. 找到 info.set_score(0) 这一行
2. 在它上面加一行 score = 10
3. info.change_score_by(score) 这一行不用改，它会每次自动加 10 分

这样既学了"变量定义"，又让游戏更好玩。
hint~

## Step 4 @showdialog

参考答案

```python
score = 10
info.set_score(0)
```

info.change_score_by(score) 这行不用改。

~hint
现在吃到星星时，分数会 +10。

变量的好处：只改一处，全局生效。把 score = 10 改成 score = 100，每次吃到的分数立刻变成 100。
hint~

## 练习完成

完成练习 1 后，请点击下一步进入练习 2。

~hint
你学到了：

1. 变量要先定义、后使用
2. 改变量值会影响所有用变量的地方
hint~

```python-template
# =============================================
# ✏️ 玩家可以修改的区域
# =============================================
life = 3
info.set_life(life)
# =============================================

myPlayer = sprites.create(sprites.castle.princess_front0, SpriteKind.player)
myPlayer.set_stay_in_screen(True)
controller.move_sprite(myPlayer, 100, 100)

info.set_score(0)

star = sprites.create(sprites.builtin.coin0, SpriteKind.food)
star.set_position(randint(0, 160), 0)
star.set_velocity(0, 50)
star.set_bounce_on_wall(True)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(score)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```
* 