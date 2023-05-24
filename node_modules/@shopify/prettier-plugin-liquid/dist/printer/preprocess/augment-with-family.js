"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.augmentWithFamily = void 0;
const augmentWithFamily = (_options, node) => {
    const children = node.children || [];
    const augmentations = {
        firstChild: children[0],
        lastChild: children[children.length - 1],
    };
    Object.assign(node, augmentations);
};
exports.augmentWithFamily = augmentWithFamily;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVnbWVudC13aXRoLWZhbWlseS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmludGVyL3ByZXByb2Nlc3MvYXVnbWVudC13aXRoLWZhbWlseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFTyxNQUFNLGlCQUFpQixHQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUMvRCxNQUFNLFFBQVEsR0FBc0IsSUFBWSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDaEUsTUFBTSxhQUFhLEdBQWU7UUFDaEMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkIsU0FBUyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUN6QyxDQUFDO0lBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBUlcsUUFBQSxpQkFBaUIscUJBUTVCIn0=