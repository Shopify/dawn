"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.augmentWithSiblings = exports.next = exports.prev = void 0;
const types_1 = require("../../types");
function prev(node) {
    if (!node.parentNode)
        return;
    const collection = parentCollection(node);
    return collection[collection.indexOf(node) - 1];
}
exports.prev = prev;
function next(node) {
    if (!node.parentNode)
        return;
    const collection = parentCollection(node);
    return collection[collection.indexOf(node) + 1];
}
exports.next = next;
function parentCollection(node) {
    if (!node.parentNode) {
        return [];
    }
    for (const key of Object.keys(node.parentNode)) {
        const parentValue = node.parentNode[key];
        if (Array.isArray(parentValue)) {
            if (parentValue.indexOf(node) !== -1) {
                return parentValue;
            }
        }
        if ((0, types_1.isLiquidHtmlNode)(parentValue) && parentValue === node) {
            return [];
        }
    }
    throw new Error('Could not find parent collection of node');
}
const augmentWithSiblings = (_options, node) => {
    const augmentations = {
        next: next(node),
        prev: prev(node),
    };
    Object.assign(node, augmentations);
};
exports.augmentWithSiblings = augmentWithSiblings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVnbWVudC13aXRoLXNpYmxpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByaW50ZXIvcHJlcHJvY2Vzcy9hdWdtZW50LXdpdGgtc2libGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBT2lCO0FBRWpCLFNBQWdCLElBQUksQ0FBQyxJQUErQjtJQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7UUFBRSxPQUFPO0lBQzdCLE1BQU0sVUFBVSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUpELG9CQUlDO0FBRUQsU0FBZ0IsSUFBSSxDQUFDLElBQStCO0lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtRQUFFLE9BQU87SUFDN0IsTUFBTSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsT0FBTyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBSkQsb0JBSUM7QUFFRCxTQUFTLGdCQUFnQixDQUN2QixJQUErQjtJQUUvQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNwQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUU5QyxNQUFNLFdBQVcsR0FBSSxJQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM5QixJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BDLE9BQU8sV0FBVyxDQUFDO2FBQ3BCO1NBQ0Y7UUFFRCxJQUFJLElBQUEsd0JBQWdCLEVBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtZQUN6RCxPQUFPLEVBQUUsQ0FBQztTQUNYO0tBQ0Y7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUVNLE1BQU0sbUJBQW1CLEdBQXdCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ3pFLE1BQU0sYUFBYSxHQUFpQjtRQUNsQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBK0I7UUFDOUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQStCO0tBQy9DLENBQUM7SUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFQVyxRQUFBLG1CQUFtQix1QkFPOUIifQ==