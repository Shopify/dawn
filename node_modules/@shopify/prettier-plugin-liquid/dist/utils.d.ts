import { Position } from './types';
export declare function assertNever(x: never): never;
export declare function locStart(node: {
    position: Position;
}): number;
export declare function locEnd(node: {
    position: Position;
}): number;
export declare function deepGet<T = any>(path: (string | number)[], obj: any): T;
export declare function dropLast<T>(n: number, xs: readonly T[]): T[];
