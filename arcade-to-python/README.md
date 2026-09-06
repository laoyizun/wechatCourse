# arcade->python

Python 入门课程 - 从图形化编程迁移到文本编程。

## 课程入口

直接点击下面的链接，MakeCode Arcade 会自动以 tutorial 形式加载对应的 markdown：

| 课程 | 链接 |
|---|---|
| L1 前段（5 步知识引入）| [打开](https://arcade.makecode.com/#tutorial:71771-77314-23145-59042) |
| L1 独立练习 1：变量未定义（改错）| [打开](https://arcade.makecode.com/#tutorial:23190-86813-52429-95567) |
| L1 独立练习 2：变量名大小写（改错）| [打开](https://arcade.makecode.com/#tutorial:92802-00412-66180-91768) |
| L1 独立练习 3：变量覆盖（改错）| [打开](https://arcade.makecode.com/#tutorial:24679-42530-15053-25447) |
| L1 长项目（学以致用）| [打开](https://arcade.makecode.com/#tutorial:26594-91549-83619-04571) |
| L2 前段（运算符）| [打开](https://arcade.makecode.com/#tutorial:15294-36349-57035-12569) |
| L2 独立练习 1：超市收银（填空）| [打开](https://arcade.makecode.com/#tutorial:80649-43547-16757-47693) |
| L2 独立练习 2：红包分配（填空）| [打开](https://arcade.makecode.com/#tutorial:69920-50868-70332-28583) |
| L2 独立练习 3：国王金豆（填空）| [打开](https://arcade.makecode.com/#tutorial:97618-81658-37463-26606) |
| L2 长项目：炸弹减半 | [打开](https://arcade.makecode.com/#tutorial:57645-69689-51321-83183) |

## 课程简介

通过 8 节课，学生将掌握 Python 的 4 个核心概念：**变量、运算符、if/else、循环**，并在"星际冒险"游戏项目中不断应用所学知识。

每节课约 90 分钟，按 3 段式教学：
- 前段：知识引入（约 25-30 分钟）
- 中段：3-5 个独立小练习（约 30-40 分钟）
- 后段：长项目学以致用（约 20-30 分钟）

## 自动化部署工具

```bash
# 自动生成 share URL（用 MakeCode 后端 API，无需浏览器）
python3 arcade-to-python/tools-share.py \
  l2-main.md l2-practice-1.md l2-practice-2.md l2-practice-3.md l2-project.md
```

## 注意事项

- 第一次加载可能会有 30 秒左右的延迟（MakeCode 从 GitHub 拉取 markdown）
- 如果看不到效果，请用浏览器的**无痕模式**重新打开
- 修改 markdown 后，MakeCode 缓存可能需要 5-10 分钟才刷新

## 反馈

课程问题反馈请提交 GitHub Issue。