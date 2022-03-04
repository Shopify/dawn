# Installation
> `npm install --save @types/imagemin-gifsicle`

# Summary
This package contains type definitions for imagemin-gifsicle (https://github.com/imagemin/imagemin-gifsicle#readme).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/imagemin-gifsicle.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/imagemin-gifsicle/index.d.ts)
````ts
// Type definitions for imagemin-gifsicle 7.0
// Project: https://github.com/imagemin/imagemin-gifsicle#readme
// Definitions by: Romain Faust <https://github.com/romain-faust>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'imagemin';

/**
 * Imagemin plugin for {@link https://www.lcdf.org/gifsicle/|Gifsicle}
 */
declare function imageminGifsicle(options?: imageminGifsicle.Options): Plugin;

declare namespace imageminGifsicle {
    interface Options {
        /**
         * Reduce the number of distinct colors in each output GIF to num or less.
         * Num must be between 2 and 256.
         */
        colors?: number | undefined;
        /**
         * Interlace gif for progressive rendering.
         * @default false
         */
        interlaced?: boolean | undefined;
        /**
         * Select an optimization level between 1 and 3.
         * @see {@link https://github.com/imagemin/imagemin-gifsicle#optimizationlevel}
         * @default 1
         */
        optimizationLevel?: number | undefined;
    }
}

export = imageminGifsicle;

````

### Additional Details
 * Last updated: Tue, 06 Jul 2021 21:33:39 GMT
 * Dependencies: [@types/imagemin](https://npmjs.com/package/@types/imagemin)
 * Global values: none

# Credits
These definitions were written by [Romain Faust](https://github.com/romain-faust), and [Piotr Błażejewicz](https://github.com/peterblazejewicz).
