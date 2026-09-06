# arcade->python

Python 入门课程 - 从图形化编程迁移到文本编程。

## 课程入口

直接点击下面的链接，MakeCode Arcade 会自动以 tutorial 形式加载对应的 markdown：

| 课程 | 链接 |
|---|---|
| L1 前段（5 步知识引入）| [打开](https://arcade.makecode.com/#tutorial:78610-82752-51824-91461) |
| L1 独立练习 1：变量未定义（改错）| [打开](https://arcade.makecode.com/#tutorial:22018-16870-46318-69052) |
| L1 独立练习 2：变量名大小写（改错）| [打开](https://arcade.makecode.com/#tutorial:13070-75141-42283-94681) |
| L1 独立练习 3：变量覆盖（改错）| [打开](https://arcade.makecode.com/#tutorial:26534-76576-99981-72291) |
| L1 长项目（学以致用）| [打开](https://arcade.makecode.com/#tutorial:46740-73771-88426-36189) |
| L2 前段（运算符）| [打开](https://arcade.makecode.com/#tutorial:04784-18418-22909-44907) |
| L2 独立练习 1：超市收银（填空）| [打开](https://arcade.makecode.com/#tutorial:66477-11997-81965-90718) |
| L2 独立练习 2：红包分配（填空）| [打开](https://arcade.makecode.com/#tutorial:24868-85705-53759-09462) |
| L2 独立练习 3：国王金豆（填空）| [打开](https://arcade.makecode.com/#tutorial:69534-01363-38214-69432) |
| L2 长项目：炸弹减半 | [打开](https://arcade.makecode.com/#tutorial:07458-76960-05653-67681) |

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