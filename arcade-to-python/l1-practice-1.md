# L1 独立练习 1 · 填空

### @explicitHints true
### @preferredEditor python

## 练习说明 @showdialog

欢迎来到 L1 独立练习 1。

本练习是"**填空**"——下面这段代码想让"游戏开始时分数为 0，每过一关 +100 分"。

但是有一行**没写完**，请你填上。

~hint
复习一下前段学的。

变量赋值用 变量名 = 数字。

改值用 变量名 = 变量名 + 数字。
hint~

## Step 1

请在右侧的 Python 编辑器中，把下面这段代码补全：

第 1 行：把 0 放进 score 这个盒子里
第 2 行：把 score 盒子里的数字 + ____，再放回 score 盒子里
第 3 行：把 score 盒子里的数字告诉给游戏

```python
score = 0
score = score + ____
info.set_score(score)
```

~hint
提示：每过一关 +100 分。空格处应该填什么数字？
hint~

## Step 2 @showdialog

**参考答案**

```python
score = 0
score = score + 100
info.set_score(score)
```

~hint
每过一关 +100 分，所以空格填 100。

整个过程：先定义 score = 0，然后 score = score + 100（取出 0，加 100，放回 score），最后 info.set_score(score) 把当前值告诉游戏。

如果你填对了，恭喜你完成了填空练习！
hint~

## 练习完成

**完成练习 1 后，请点击下一步进入练习 2：找错。**

~hint
找错是阅读能力的训练，比填空要求更高。

找错时要有耐心：逐行读、逐字查、思考每个错误的影响。
hint~
