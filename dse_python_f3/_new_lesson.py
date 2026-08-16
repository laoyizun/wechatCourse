#!/usr/bin/env python3
"""
新课件生成器（v1 · 智能 main 边界检测）

用法：
    python _new_lesson.py 6 "list 列表" /tmp/l6_body.html 12

参数：
    1. 课次（如 6 表示 L6）
    2. 标题（如 "list 列表"）
    3. body 文件路径（如 /tmp/l6_body.html）— 内容是 <section>...</section>...
    4. 总页数（如 12）

功能：
    1. 复制 _template.html 为 Lx.html
    2. 智能定位 <main>...</main> 边界（不依赖行号）
    3. 替换 main 内容为新 body
    4. 改 <title> 为 Lx · 标题
    5. 改 <span id="total">N</span>

为什么用智能 main 边界：
    - 避免之前每次"算 line 数"的错误
    - 不会留 Recap / Cover 残留
    - 重做模板时不会破坏 CSS

作者：laoyizun + AI 助手
日期：2026-08-16
"""

import sys
import re
from pathlib import Path


TEMPLATE_FILE = '_template.html'


def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)


def find_main_block(content):
    """智能定位 main 块（智能边界检测）"""
    # 找 <main 起始位置
    main_start_pos = content.find('<main class="deck"')
    if main_start_pos == -1:
        raise ValueError("未找到 <main class=\"deck\" 标签")

    # 找 </main> 结束位置（从 main_start 之后开始找）
    main_end_pos = content.find('</main>', main_start_pos)
    if main_end_pos == -1:
        raise ValueError("未找到 </main> 标签")

    return main_start_pos, main_end_pos + len('</main>')


def validate_body(body):
    """验证 body 内容合理性"""
    if '<main' in body or '</main>' in body:
        raise ValueError("body 不应包含 <main> 或 </main> 标签")

    section_count = len(re.findall(r'<section\s+class="slide', body))
    if section_count == 0:
        raise ValueError("body 必须包含至少 1 个 <section class=\"slide\">")


def create_lesson(lesson_num, title, body_file, total):
    """创建新课"""
    if not Path(TEMPLATE_FILE).exists():
        print(f"❌ 模板文件 {TEMPLATE_FILE} 不存在")
        sys.exit(1)

    if not Path(body_file).exists():
        print(f"❌ body 文件 {body_file} 不存在")
        sys.exit(1)

    target = f'L{lesson_num}.html'

    # 1. 读模板
    content = read_file(TEMPLATE_FILE)

    # 2. 智能定位 main 边界
    main_start, main_end = find_main_block(content)
    print(f"  智能定位 main: 字符 {main_start}-{main_end}")

    # 3. 读 body
    body = read_file(body_file).strip()

    # 4. 验证 body
    validate_body(body)
    section_count = len(re.findall(r'<section\s+class="slide', body))
    print(f"  body 中检测到 {section_count} 个 slide")

    # 5. 构造新 main
    new_main = f'<main class="deck" id="deck">\n\n  {body}\n\n</main>\n'

    # 6. 替换 main
    new_content = content[:main_start] + new_main + content[main_end:]

    # 7. 改 title
    new_content = re.sub(
        r'<title>.*?</title>',
        f'<title>L{lesson_num} · {title} — Python</title>',
        new_content,
        count=1
    )

    # 8. 改 total
    new_content = re.sub(
        r'<span id="total">\d+</span>',
        f'<span id="total">{total}</span>',
        new_content,
        count=1
    )

    # 9. 写文件
    write_file(target, new_content)

    # 10. 验证输出
    slide_in_out = len(re.findall(r'<section\s+class="slide', new_content))
    main_balance = (
        len(re.findall(r'<main[ >]', new_content)) ==
        len(re.findall(r'</main>', new_content))
    )

    print(f"✓ 创建 {target}")
    print(f"  - 标题: L{lesson_num} · {title}")
    print(f"  - 实际 slide: {slide_in_out} 个")
    print(f"  - 声明 total: {total}")
    print(f"  - main 平衡: {'✓' if main_balance else '✗'}")


def main():
    if len(sys.argv) != 5:
        print("用法：python _new_lesson.py <课次> <标题> <body 文件> <总页数>")
        print("示例：python _new_lesson.py 6 \"list 列表\" /tmp/l6_body.html 12")
        sys.exit(1)

    lesson_num = sys.argv[1]
    title = sys.argv[2]
    body_file = sys.argv[3]
    total = int(sys.argv[4])

    print(f"→ 创建 L{lesson_num}.html（{title}）")
    create_lesson(lesson_num, title, body_file, total)
    print(f"  下一步：用浏览器打开 L{lesson_num}.html 测试")


if __name__ == '__main__':
    main()
