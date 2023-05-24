> Default HTML styles as defined by [W3C specification](https://www.w3.org/TR/html5/rendering.html)

# html-styles

```
npm install html-styles
```

## Usage

```js
const defaultStyles = require('html-styles');
const applicable = styles.filter(({selectorText}) => document.body.matches(selectorText));

// [
//   { selectorText: "html, body", type: "CSSStyleRule", style: {…}},
//   { selectorText: "address, blockquote, center, div, figure, figcaption, footer, form, header, hr,\nlegend, listing, main, p, plaintext, pre, summary, xmp, article, aside, h1, h2,\nh3, h4, h5, h6, hgroup, nav, section, table, caption, colgroup, col, thead,\ntbody, tfoot, tr, td, th, dir, dd, dl, dt, ol, ul, li, [dir=ltr i],\n[dir=rtl i], [dir=auto i], *|*", type: "CSSStyleRule", style: {…} }
// ]
```

## Scrapeing

```
yarn install
yarn scrape
```

## License

`html-styles` is released under the MIT license.