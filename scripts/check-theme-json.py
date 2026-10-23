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
                    document = json.loads(schema)
                    # Shopify only permits these static defaults for URL inputs.
                    # Theme Check does not currently report arbitrary path defaults.
                    groups = [document, *document.get("blocks", [])]
                    for group in groups:
                        for setting in group.get("settings", []):
                            if setting.get("type") == "url" and "default" in setting:
                                if setting["default"] not in ("/collections", "/collections/all"):
                                    raise ValueError(f"Unsupported URL default in {path.relative_to(ROOT)}: {setting['id']}")
                except json.JSONDecodeError as error:
                    raise ValueError(f"Invalid schema in {path.relative_to(ROOT)}: {error}") from error
                count += 1

print(f"Validated {count} theme JSON documents and section schemas.")
