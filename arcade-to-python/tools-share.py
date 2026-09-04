#!/usr/bin/env python3
"""
批量上传 tutorial markdown 并生成 share URL。

用法：
python3 batch_share.py file1.md file2.md ...

输出 JSON 包含所有 share URL。
"""
import sys
import json
import requests

API_URL = 'https://makecode.com/api/scripts'

def upload_markdown(md_path):
    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()

    name = md_path.split('/')[-1].replace('.md', '')

    payload = {
        "name": f"share-{name}",
        "meta": {},
        "text": {
            "main.ts": "",
            "main.py": "",
            "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n  <block type=\"pxt-on-start\" x=\"0\" y=\"0\"></block>\n</xml>",
            "pxt.json": json.dumps({
                "name": "share",
                "description": "",
                "dependencies": {"device": "*"},
                "files": ["main.blocks", "main.ts", "README.md", "assets.json", "main.py"],
                "preferredEditor": "pyprj"
            }),
            "assets.json": "",
            "README.md": md_content
        },
        "target": "arcade",
        "editor": "pyprj"
    }

    resp = requests.post(API_URL, json=payload, headers={'Content-Type': 'application/json'})

    if resp.status_code == 200:
        data = resp.json()
        share_id = data.get('id')
        if share_id:
            return {
                'file': md_path,
                'name': name,
                'success': True,
                'share_id': share_id,
                'share_url': f"https://arcade.makecode.com/#tutorial:{share_id}"
            }
    return {
        'file': md_path,
        'name': name,
        'success': False,
        'error': f'HTTP {resp.status_code}',
        'response': resp.text[:200]
    }

if __name__ == '__main__':
    files = sys.argv[1:]
    if not files:
        print("Usage: python3 batch_share.py file1.md file2.md ...")
        sys.exit(1)

    results = [upload_markdown(f) for f in files]

    print(json.dumps(results, indent=2, ensure_ascii=False))

    # 同时输出一个易读的表
    print("\n=== Share URLs ===")
    for r in results:
        if r['success']:
            print(f"  {r['name']}: {r['share_url']}")
        else:
            print(f"  {r['name']}: FAILED - {r.get('error', '?')}")