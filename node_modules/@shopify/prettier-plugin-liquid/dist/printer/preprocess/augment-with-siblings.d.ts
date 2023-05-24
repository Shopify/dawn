import { AugmentedNode, Augment, WithParent } from '../../types';
export declare function prev(node: AugmentedNode<WithParent>): AugmentedNode<WithParent> | undefined;
export declare function next(node: AugmentedNode<WithParent>): AugmentedNode<WithParent> | undefined;
export declare const augmentWithSiblings: Augment<WithParent>;
