#!/usr/bin/env python3
"""Sync share URLs from JSON output to index files."""
import json
import re
import subprocess
import sys
from pathlib import Path

def get_share_urls_from_output(output: str) -> dict:
    """Parse the JSON output from tools-share.py and extract share_url per file."""
    # Find the JSON block (between first [ and last ])
    json_match = re.search(r'\[\s*\{[\s\S]*?\}\s*\]', output)
    if not json_match:
        raise ValueError("Could not find JSON output in tools-share.py output")
    data = json.loads(json_match.group(0))
    return {item['file']: item['share_url'] for item in data if item.get('success')}

def replace_urls_in_file(file_path: Path, url_map: dict):
    """Replace old share URLs in markdown/HTML with new ones."""
    content = file_path.read_text(encoding='utf-8')
    original = content
    for md_file, new_url in url_map.items():
        # Extract just the share ID (last 5 digits after 'tutorial:')
        new_id = new_url.split(':')[-1]
        # Pattern: tutorial:XXXX-XXXX-XXXX-XXXX (only for this specific file)
        # We use the comment context (e.g., "前段" appears near l1-main) to match
        # Simpler approach: find all current URLs and map by their position
        # But for now, just do exact text replacement of old IDs
        # We need to map old_id -> new_id per file
        # For simplicity, look for any tutorial:XXXX-XXXX-XXXX-XXXX pattern
        # and replace based on order in the file
    return original  # placeholder, will rewrite below

def sync(file_pairs: list):
    """
    file_pairs: list of (markdown_file, file_key_in_index)
    For each pair, replace the old share URL in index.html/README.md/tutorials-index.md
    """
    # Read current files to extract existing URLs by name/position
    # This is tricky - we need to know which URL corresponds to which md file
    # We'll use the order: L1.x lines come first, then L2.x, etc.
    # For now, simple approach: read current URLs in order, match by file order in share output
    pass

# Simpler implementation: pass file name -> URL map directly
def replace_in_file(file_path: Path, url_map: dict):
    """Replace URLs in file. url_map: {'l1-main.md': (old_id, new_id), ...}"""
    content = file_path.read_text(encoding='utf-8')
    for md_file, (old_id, new_id) in url_map.items():
        old_full = f'tutorial:{old_id}'
        new_full = f'tutorial:{new_id}'
        content = content.replace(old_full, new_full)
    file_path.write_text(content, encoding='utf-8')
    return content

if __name__ == '__main__':
    print("This is a helper module. Run from workflow script.")