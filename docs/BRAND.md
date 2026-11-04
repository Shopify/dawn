# Cellife brand implementation

Current direction: owner-confirmed digital blue **#03107B** (4 November 2026),
Broadacre headings and Inter body text. This supersedes the earlier PDF colour
sampling. `#03107BFF` is the same fully opaque colour.

## Palette

Brand headings, actions, focus outlines and existing blue theme settings use
#03107B. The restrained red #8F2C26 and neutral surfaces remain. Hover/pressed
states use darker derivatives #020B56 / #02083E. Photo, icon and logo pixels are
not recoloured; replace source artwork where its embedded blue needs correction.

## Typography

`snippets/cellife-brand-fonts.liquid` defines local WOFF2 fonts with font-display:
swap. The shared Dawn body and heading variables use Inter and Broadacre in the
storefront, password page and gift card. The old font pickers were replaced with
an explanation; typography size controls remain available.

Broadacre sources are the five owner-supplied OTF files, converted with FontTools
without subsetting. CSS weights map Hairline/Thin/Light/Regular/Medium to
100/200/300/400/500 respectively (source metadata uses nonstandard lighter values).
Headings default to Regular 400. No font licensing assessment is implied by the
conversion. Retain the owner's original files outside the theme repository.

Inter Latin normal/italic variable WOFF2 files come from @fontsource-variable/inter
and include its SIL Open Font License in assets/inter-OFL.txt. They supply weights
100–900. Browser fallback remains Arial/sans-serif for unsupported glyphs or
failed font loads. Only Inter normal and Broadacre Regular are preloaded; remaining
faces load when used. Fonts are served by Shopify assets, without a third-party
font service. Shopify checkout, email templates and image-embedded lettering are
outside the theme typography scope.
