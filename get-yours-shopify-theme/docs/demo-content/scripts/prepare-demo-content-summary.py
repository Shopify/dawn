#!/usr/bin/env python3
import csv
from pathlib import Path

base = Path(__file__).resolve().parents[1]
products = list(csv.DictReader((base / "demo-products.csv").open(newline="")))
collections = list(csv.DictReader((base / "demo-collections.csv").open(newline="")))
images = {p.name for p in (base / "optimised-images").glob("*.jpg")}
product_handles = [p["handle"] for p in products]
collection_handles = [c["handle"] for c in collections]
missing_product_images = [p["image_filename"] for p in products if p["image_filename"] not in images]
duplicate_product_handles = sorted({h for h in product_handles if product_handles.count(h) > 1})
duplicate_collection_handles = sorted({h for h in collection_handles if collection_handles.count(h) > 1})
print(f"products: {len(products)}")
print(f"collections: {len(collections)}")
print(f"images: {len(images)}")
print(f"missing_product_images: {missing_product_images}")
print(f"duplicate_product_handles: {duplicate_product_handles}")
print(f"duplicate_collection_handles: {duplicate_collection_handles}")
if missing_product_images or duplicate_product_handles or duplicate_collection_handles:
    raise SystemExit(1)
