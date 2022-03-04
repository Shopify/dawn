// Type definitions imported from DefinitielyTyped for webpack-notifier 1.13
// Project: https://github.com/Turbo87/webpack-notifier#readme
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Alexandre Germain <https://github.com/gerkindev>
//                 Gvozdev Viktor <https://github.com/Gvozd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

import { Compiler } from 'webpack';

export = WebpackNotifierPlugin;

declare class WebpackNotifierPlugin {
    constructor(options?: WebpackNotifierPlugin.Options);
    apply(compiler: Compiler): void;
}

declare namespace WebpackNotifierPlugin {
    interface Options {
        alwaysNotify?: boolean;
        contentImage?: {[key in 'success' | 'warning' | 'error']: string} | string;
        excludeWarnings?: boolean;
        onlyOnError?: boolean;
        skipFirstNotification?: boolean;
        title?: string | TitleGetter;
        /**
         * Use emoji in notifications
         */
        emoji?: boolean;
    }

    /** @deprecated use Options */
    type Config = Options;

    type TitleGetter = (data: {msg: string,message: string,status: string}) => string;
}
