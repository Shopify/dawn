# Installation
> `npm install --save @types/imagemin-optipng`

# Summary
This package contains type definitions for imagemin-optipng (https://github.com/imagemin/imagemin-optipng#readme).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/imagemin-optipng.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/imagemin-optipng/index.d.ts)
````ts
// Type definitions for imagemin-optipng 5.2
// Project: https://github.com/imagemin/imagemin-optipng#readme
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'imagemin';

declare function imageminOptipng(options?: imageminOptipng.Options): Plugin;

declare namespace imageminOptipng {
    interface Options {
        bitDepthReduction?: boolean | undefined;
        colorTypeReduction?: boolean | undefined;
        optimizationLevel?: number | undefined;
        paletteReduction?: boolean | undefined;
    }
}

export = imageminOptipng;

````

### Additional Details
 * Last updated: Tue, 06 Jul 2021 21:33:39 GMT
 * Dependencies: [@types/imagemin](https://npmjs.com/package/@types/imagemin)
 * Global values: none

# Credits
These definitions were written by [Romain Faust](https://github.com/romain-faust).
