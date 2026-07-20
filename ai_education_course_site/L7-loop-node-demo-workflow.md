# L7 循环节点课堂演示工作流

## Demo 名称

数学薄弱点复习任务生成器

## Demo 目标

让学生理解循环节点适合处理“多个同类项目”：

- 输入多个数学薄弱点；
- 工作流把它们拆成列表；
- 循环节点逐个处理每个知识点；
- 每轮生成一个复习任务；
- 最后聚合成今日数学复习计划。

## 最小输入

```text
weak_points：函数定义域、函数单调性、二次函数最值
available_time：45分钟
goal：准备函数周测
```

## 工作流线框

```text
输入节点
  weak_points
  available_time
  goal
      ↓
大模型节点：拆分薄弱点
  输出 weak_point_list
      ↓
循环节点
  循环对象：weak_point_list
  单轮变量：knowledge_point
      ↓
大模型节点：生成单点复习任务
  输出 review_task
      ↓
变量聚合
  合并每一轮 review_task
      ↓
大模型节点：整理今日计划
      ↓
输出节点
```

## 节点 1：输入节点

字段：

| 字段名 | 类型 | 示例 |
|---|---|---|
| weak_points | 文本 | 函数定义域、函数单调性、二次函数最值 |
| available_time | 文本 | 45分钟 |
| goal | 文本 | 准备函数周测 |

## 节点 2：大模型节点｜拆分薄弱点

作用：把学生输入的一句话拆成稳定列表。

输入：

```text
weak_points
available_time
goal
```

Prompt：

```text
你是数学复习任务工作流中的“薄弱点拆分节点”。

请把用户输入的数学薄弱点拆成列表。

要求：
1. 只输出合法 JSON；
2. 不要输出 Markdown；
3. 不要输出解释文字；
4. 如果只有一个薄弱点，也放进数组；
5. 如果没有明确薄弱点，weak_point_list 返回空数组。

用户输入：
weak_points：{{weak_points}}
available_time：{{available_time}}
goal：{{goal}}

返回格式：
{
  "weak_point_list": ["知识点1", "知识点2"],
  "available_time": "{{available_time}}",
  "goal": "{{goal}}"
}
```

输出字段：

```text
weak_point_list
available_time
goal
```

## 节点 3：循环节点

作用：逐个处理 `weak_point_list` 里的知识点。

循环配置：

```text
循环对象：weak_point_list
单轮变量名：knowledge_point
```

循环里每一轮会拿到一个知识点，例如：

```text
第 1 轮：函数定义域
第 2 轮：函数单调性
第 3 轮：二次函数最值
```

## 节点 4：循环内部大模型节点｜生成单点复习任务

作用：每一轮只为一个知识点生成复习任务。

输入：

```text
knowledge_point
available_time
goal
```

Prompt：

```text
你是数学复习任务生成节点。

请只针对当前 knowledge_point 生成一个 10-15 分钟的复习任务。

当前知识点：
{{knowledge_point}}

总可用时间：
{{available_time}}

复习目标：
{{goal}}

要求：
1. 不要生成其他知识点的任务；
2. 任务要具体，可执行；
3. 必须包含检测方式；
4. 只输出合法 JSON，不要 Markdown。

返回格式：
{
  "knowledge_point": "{{knowledge_point}}",
  "review_task": "",
  "estimated_time": "",
  "check_method": ""
}
```

输出字段：

```text
knowledge_point
review_task
estimated_time
check_method
```

## 节点 5：变量聚合

作用：把循环中每一轮生成的任务合并。

聚合内容：

```text
knowledge_point
review_task
estimated_time
check_method
```

聚合后的字段可以命名为：

```text
review_plan_items
```

## 节点 6：大模型节点｜整理今日计划

作用：把聚合后的任务整理成学生能直接照做的计划。

输入：

```text
review_plan_items
available_time
goal
```

Prompt：

```text
你是数学学习计划整理节点。

请根据 review_plan_items 整理一份今日数学复习计划。

要求：
1. 按优先级排列；
2. 每个任务都要有预计时间；
3. 每个任务都要有完成标准；
4. 总时间不要明显超过 available_time；
5. 语言简洁，适合学生照着做。

复习任务列表：
{{review_plan_items}}

可用时间：
{{available_time}}

复习目标：
{{goal}}

输出格式：
今日数学复习计划：
1. 知识点：
   任务：
   时间：
   完成标准：

2. 知识点：
   任务：
   时间：
   完成标准：

最后给一句提醒。
```

输出字段：

```text
final_plan
```

## 节点 7：输出节点

输出：

```text
{{final_plan}}
```

## 课堂测试输入

```text
weak_points：函数定义域、函数单调性、二次函数最值
available_time：45分钟
goal：准备函数周测
```

## 预期输出

```text
今日数学复习计划：

1. 知识点：函数定义域
   任务：复习根号、分母、对数三类限制，并做 2 道定义域题。
   时间：15 分钟
   完成标准：能说出每道题所有限制条件。

2. 知识点：函数单调性
   任务：先标出区间，再判断函数在区间上的变化趋势。
   时间：15 分钟
   完成标准：能说明为什么不能只看整体图像。

3. 知识点：二次函数最值
   任务：检查对称轴、顶点和区间端点。
   时间：15 分钟
   完成标准：能判断顶点是否在给定区间内。

提醒：先做定义域，因为它最近最容易出现条件遗漏。
```

## 学生需要理解的关键点

1. 循环节点不是为了让流程变复杂，而是为了处理多个同类项目。
2. 循环前要先把输入整理成列表。
3. 循环内部每次只处理一个项目。
4. 循环后要做变量聚合，否则最终输出拿不到完整列表。
5. 最后还需要一个整理节点，把多个任务变成学生能读懂的计划。

## 常见错误

| 问题 | 原因 | 修复 |
|---|---|---|
| 循环没有执行 | weak_point_list 不是数组 | 检查拆分节点 JSON |
| 只生成一个任务 | 循环对象选错 | 循环对象应选择 weak_point_list |
| 每个任务都混在一起 | 循环内部 Prompt 没限制单个知识点 | 加上“只针对当前 knowledge_point” |
| 最终输出缺任务 | 没有变量聚合 | 在循环后增加变量聚合 |
| 输出太啰嗦 | 整理节点格式不清 | 固定“知识点/任务/时间/完成标准”格式 |

