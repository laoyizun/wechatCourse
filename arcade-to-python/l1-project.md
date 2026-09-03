# L1 长项目 · 给"星际冒险"加上生命值

### @explicitHints true
### @preferredEditor python

## 项目说明 @showdialog

欢迎来到 L1 长项目。

在前段你已经学完了变量的概念，在中段你已经做过填空、找错、追代码练习。

现在我们把今天学的"变量"用到"星际冒险"游戏里。

~hint
本项目会用到 python-template 块，初始代码已经写好了大部分。

你需要做的是：在空格处填入正确的代码（生命值相关）。
hint~

## Step 1

**项目任务**

下面这段代码是"星际冒险"游戏的基础版本，包含玩家移动、金币下落、碰撞检测。

但是**生命值相关**的代码空着。请你补全：

1. 定义一个名为 `life` 的变量，初始值是 `3`
2. 把 `life` 告诉给游戏

~hint
提示：life = 3 是定义变量，info.set_life(life) 是告诉游戏。

两个都别忘了。
hint~

## Step 2

请在右侧的 Python 编辑器中，把下面这段代码补全：

```python-template
# ✏️ 玩家需要填的区域
life = ____
info.set_life(____)

# =============================================
# 🔒 下面是游戏运行逻辑（不要改）
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
    info.change_score_by(1)
    otherSprite.set_position(randint(0, 160), 0)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)
```

~hint
需要填两个空格。

第一个空格（life = ____）：填数字 3，代表初始生命值。

第二个空格（info.set_life(____)）：填 life 变量名，把变量告诉给游戏。
hint~

## Step 3 @showdialog

**参考答案**

```python
life = 3
info.set_life(life)
```

~hint
完整的过程：先定义 life = 3 这个变量，再调用 info.set_life(life) 把 life 当前的值告诉给游戏。

游戏看到 life 是 3，就把生命值显示成 3。
hint~

## 项目完成

**恭喜你完成了 L1 全部 5 个环节！**

| 环节 | 内容 |
|---|---|
| 前段 | 5 个 step 讲解变量概念 |
| 中段练习 1 | 填空 |
| 中段练习 2 | 找错 |
| 中段练习 3 | 追代码 |
| 后段 | 长项目：把变量用到游戏里 |

你已经掌握了 Python 最基础的概念——**变量**。

~hint
课后挑战（自由探索）。

回到你的"星际冒险"项目，试试：把 life 改成 5，看看游戏会怎么样；改一个 star_speed = 50，让金币下落变快；你还能想到哪些"游戏里的变量"？
hint~
