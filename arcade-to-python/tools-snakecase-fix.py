#!/usr/bin/env python3
"""Batch fix snake_case method names to camelCase in MakeCode Arcade tutorial markdown."""
import re
import sys
from pathlib import Path

# Mapping from snake_case to camelCase (verified from MakeCode Arcade API)
MAPPINGS = {
    'set_stay_in_screen': 'setStayInScreen',
    'move_sprite': 'moveSprite',
    'set_position': 'setPosition',
    'set_velocity': 'setVelocity',
    'set_bounce_on_wall': 'setBounceOnWall',
    'change_score_by': 'changeScoreBy',
    'change_life_by': 'changeLifeBy',
    'set_life': 'setLife',
    'set_score': 'setScore',
    'set_image': 'setImage',
    'life()': 'life()',
    'score()': 'score()',
    # SpriteKind stays uppercase
    # on_overlap stays lowercase (this is a MakeCode namespace function)
    # on_on_overlap stays lowercase (this is a function name pattern)
}

# Sort by length descending so longer names are replaced first
sorted_mappings = sorted(MAPPINGS.items(), key=lambda x: -len(x[0]))

def fix_file(md_path: Path) -> int:
    content = md_path.read_text(encoding='utf-8')
    original = content
    replacements = 0
    for snake, camel in sorted_mappings:
        if snake == camel:
            continue
        # Use word boundaries to avoid partial replacements
        # Match: word boundary + snake_case + word boundary or '('
        pattern = re.compile(r'\b' + re.escape(snake) + r'\b')
        new_content, n = pattern.subn(camel, content)
        if n > 0:
            replacements += n
            content = new_content
    if content != original:
        md_path.write_text(content, encoding='utf-8')
    return replacements

def main():
    if len(sys.argv) > 1:
        files = [Path(f) for f in sys.argv[1:]]
    else:
        # Default: all .md files in current directory
        files = list(Path('.').glob('*.md'))

    total = 0
    for f in files:
        if not f.exists():
            print(f"❌ Not found: {f}")
            continue
        n = fix_file(f)
        if n > 0:
            print(f"✓ {f.name}: {n} replacements")
            total += n
    print(f"\nTotal: {total} replacements")

if __name__ == '__main__':
    main()