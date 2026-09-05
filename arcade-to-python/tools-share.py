#!/usr/bin/env python3
"""
批量上传 tutorial markdown 并生成 share URL。

用法：
python3 tools-share.py file1.md file2.md ...

输出 JSON 包含所有 share URL。
"""
import sys
import json
import urllib.request
import urllib.error

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

    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode('utf-8'),
        headers={'Content-Type': 'application/json'},
        method='POST'
    )

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            share_id = data.get('id')
            if share_id:
                return {
                    'file': md_path,
                    'name': name,
                    'success': True,
                    'share_id': share_id,
                    'share_url': f"https://arcade.makecode.com/#tutorial:{share_id}"
                }
    except urllib.error.HTTPError as e:
        return {
            'file': md_path,
            'name': name,
            'success': False,
            'error': f'HTTP {e.code}',
            'response': e.read().decode('utf-8', errors='replace')[:200]
        }
    except Exception as e:
        return {
            'file': md_path,
            'name': name,
            'success': False,
            'error': str(e)
        }

    return {
        'file': md_path,
        'name': name,
        'success': False,
        'error': 'no id in response'
    }

if __name__ == '__main__':
    files = sys.argv[1:]
    if not files:
        print("Usage: python3 tools-share.py file1.md file2.md ...")
        sys.exit(1)

    results = [upload_markdown(f) for f in files]

    print(json.dumps(results, indent=2, ensure_ascii=False))

    # 易读的表
    print("\n=== Share URLs ===")
    for r in results:
        if r['success']:
            print(f"  {r['name']}: {r['share_url']}")
        else:
            print(f"  {r['name']}: FAILED - {r.get('error', '?')}")