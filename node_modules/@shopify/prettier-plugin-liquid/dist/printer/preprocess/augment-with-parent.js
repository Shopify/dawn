"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.augmentWithParent = void 0;
const augmentWithParent = (_options, node, parentNode) => {
    const augmentations = {
        parentNode: parentNode,
    };
    Object.assign(node, augmentations);
    Object.defineProperty(node, '_rawSource', {
        get() {
            return this.source.slice(this.position.start, this.position.end);
        },
    });
};
exports.augmentWithParent = augmentWithParent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVnbWVudC13aXRoLXBhcmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmludGVyL3ByZXByb2Nlc3MvYXVnbWVudC13aXRoLXBhcmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFTyxNQUFNLGlCQUFpQixHQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUU7SUFDM0UsTUFBTSxhQUFhLEdBQWU7UUFDaEMsVUFBVSxFQUFFLFVBQW9DO0tBQ2pELENBQUM7SUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUluQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7UUFDeEMsR0FBRztZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxDQUFDO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBZFcsUUFBQSxpQkFBaUIscUJBYzVCIn0=