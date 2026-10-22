"""Validate theme JSON syntax, including embedded Liquid section schemas.

Shopify Theme Check remains responsible for Liquid and schema semantics.
Run from any directory; no dependencies or store access required.
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
count = 0
for directory in ("config", "locales", "templates", "sections"):
    for path in sorted((ROOT / directory).rglob("*")):
        if path.suffix == ".json":
            # Shopify may prepend a generated-file block comment to JSON files.
            source = re.sub(r"\A\s*/\*.*?\*/", "", path.read_text(), count=1, flags=re.S)
            json.loads(source)
            count += 1
        elif path.suffix == ".liquid":
            for schema in re.findall(r"{%\s*schema\s*%}(.*?){%\s*endschema\s*%}", path.read_text(), re.S):
                try:
                    json.loads(schema)
                except json.JSONDecodeError as error:
                    raise ValueError(f"Invalid schema in {path.relative_to(ROOT)}: {error}") from error
                count += 1

print(f"Validated {count} theme JSON documents and section schemas.")
