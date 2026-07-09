# Demo Content Original Inventory

## Source Folder Check

Expected source folder from original brief:

```text
/Users/thabisoradebe/Desktop/GY_Demo_Content
```

Fallback checked:

```text
~/Desktop/GY_Demo_Content
```

Corrected source folder:

```text
/Users/thabisoradebe/Downloads/GY_Demo_Content
```

Result: corrected source folder found.

Nearby Desktop folders/files checked:

- `/Users/thabisoradebe/Desktop/stitch_everyday_essentials_marketplace_ui`
- `/Users/thabisoradebe/Desktop/stitch.zip`

The Downloads source folder contains 30 PNG demo images plus `.DS_Store`.

## Inventory Summary

| Item | Count |
| --- | ---: |
| Total files in `GY_Demo_Content` | 31 |
| PNG image files found | 30 |
| Hero images found | 2 |
| Product images found | 28 |
| Non-conforming files found | 2 |
| Obvious duplicate/unusable images found | 0 |
| Images optimised | 31 |

## Image Extensions Found

| Extension | Count |
| --- | ---: |
| `.png` | 30 |
| `.DS_Store` | 1 |

## Non-Conforming Files

- `.DS_Store`
- `ProductAdjustableMetalLaptopStand.png` uses the `Product` prefix but not the `Product-` separator pattern.

## Notable Source Issues

- No dedicated travel hero image was found.
- `Product-TravelAccessories.png` is landscape and was also exported as `hero-travel-accessories-candidate.jpg` for temporary homepage use.
- Several source names contain spelling issues, but normalised output filenames use corrected ecommerce spelling:
  - `Product-GrayFrabricStorageBoxesWithFoldedClothing.png` -> `product-gray-fabric-storage-boxes-with-folded-clothing.jpg`
  - `Product-MnimalistTravelToiletrySet.png` -> `product-minimalist-travel-toiletry-set.jpg`
  - `Product-ModernKitchenSinOrganiser.png` -> `product-modern-kitchen-sink-organiser.jpg`
  - `Product-ElegantJeweleryBox.png` -> `product-elegant-jewellery-box.jpg`

## Naming Convention Expected

Hero image source files should begin with `Hero-` or `Hero`, for example:

- `HeroMainImage.png`
- `HeroOffice-desk.png`
- `HeroTravel-accessories.png`

Product image source files should begin with `Product-` or `Product`, for example:

- `Product-Adjustable-Drawer-Set.png`
- `Product-Minimalist-Jars.png`

Normalised copies should use lowercase kebab-case names:

- `hero-main-image.jpg`
- `hero-office-desk.jpg`
- `hero-travel-accessories.jpg`
- `product-adjustable-drawer-divider-set.jpg`

## Source File Safety

No source files were modified, renamed, moved or deleted.
