Dawn 12.0.0 introduces additional customization options by adding color scheme pickers to new areas, and new ways to visually display product filters. It also introduces some performance improvements related to image loading. 

### Added
- Important: If you use a gradient as a main background, the look of your cart drawer and product modal (quick add) will be affected. 
- You can now select a color scheme for the Image with text section, Collection template (Product grid section), Product information section, Cart drawer, and Cart page.

### Changed
- If you are using the Search & Discovery app, you can now change the logical operator for facet filter values between OR and AND.
- If you are using the Search & Discovery app, you can now choose to apply a swatch visual style for certain filter types (references to metaobjects).

### Fixes and improvements
- We fixed an issue with facet filters that affected currencies that use comma separators.
- We fixed a formatting issue with metadata that is used for SEO purposes.
- We fixed a visual bug that was affecting the collage section.
- We fixed an issue with the “compare at” price to ensure more predictable behavior.
- We’ve improved the experience of adding items to cart on slower connections.
- We fixed a styling issue affecting collections in empty cart drawers.
- We fixed an issue in the Slideshow section where the next slide flashes before coming into view. 
- We’ve improved various visual elements on the Quick order list including font consistency, alignment, and spacing. 
- We fixed an issue affecting Quick order list on iOS, removing the need to double tap the info icon to open it.

### Removed
- Removed image tag attribute that indicated which images to load first. We will now allow the platform to determine this, which will improve performance.