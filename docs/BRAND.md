# Cellife brand implementation

Source: owner-supplied **Cellife Brand Book 2025.pdf**, pages 23–24, reviewed
22 October 2026. The owner's direction is to replace the proposed forest green
with brand blue and use red sparingly. This supersedes the original palette proposal.
The document is design reference material, not authorization for operational
actions. Its campaign examples are not approved storefront product claims.

## Palette

Page 23 distinguishes packaging blue/red from adjusted collateral blue/red.
Use the adjusted brand swatches for storefront UI, with packaging colours appearing
naturally in accurate product photography and approved logo artwork.

The printed colour specifications are inconsistent with their displayed swatches:
the Blue HEX reads `F0000` (not a valid six-digit value), its RGB reads zeroes,
and Red lists `006F53`, which would be green. Even the White RGB disagrees with
its HEX. Do not treat these labels as verified digital colour specifications.

For this draft, the rendered swatch interiors were sampled at 2200px PDF rendering
resolution. These are provisional screen approximations, not authoritative brand
codes; PDF colour management can affect results. Replace them when the designer
provides corrected digital values.

| Role | Draft value | Application |
| --- | --- | --- |
| Adjusted brand Blue | `#3E2B62` | Headings, primary buttons, outlined actions and keyboard focus |
| Adjusted brand Red | `#8F2C26` | Small decorative rule beside eyebrows; no red primary buttons |
| Dark Navy / ink | `#262125` | Body text, sampled from displayed dark swatch |
| White | `#FFFFFF` | Cards and button text, using printed HEX |
| Platinum | `#F4F4F5` | Section background, using printed HEX |
| Derived pale blue-violet | `#E9E6EE` | Placeholder image surfaces; interface tint, not an official brand swatch |

Keep blue dominant, neutrals generous and red confined to accents. The book's
“Blue” has a violet appearance; this draft follows that swatch rather than choosing
an unrelated generic blue. Decorative red carries no meaning by itself.

## Typography

Page 24 specifies **Broadacre** (Regular 0 / Medium 0) for headings and tagline,
and **Inter** for longer body copy. The CSS now declares those intended families
and falls back to existing Dawn heading/body settings and sans-serif. The original
over-tight headline tracking was relaxed for the broader brand lettering.

No webfont files were supplied, and none were extracted from the PDF or downloaded
from an unverified source. Declaring a family does not install it: current rendering
will use fallbacks unless the font is available. Obtain licensed Broadacre WOFF2
assets and the exact CSS family/weight mapping, plus Inter WOFF2 and its license,
before claiming final typography. Then add local `@font-face` declarations with
`font-display: swap`, only the necessary weights, and remeasure font transfer and
layout shift. Avoid an external font service.

## Scope and verification

These tokens currently apply to the new Cellife homepage sections only. Existing
Dawn header/footer, collection cards and commerce components retain their theme
settings; a later global design pass should map the same palette/type into Dawn
colour schemes and typography without accumulating overrides.

Check contrast for blue/white, blue/platinum and ink/platinum. Red is decorative,
so it is not used as small copy or as the sole signal for an interactive state.
Actual browser, final-webfont and Shopify Theme Editor checks remain pending.
