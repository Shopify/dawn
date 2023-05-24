"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.intersperse = exports.first = exports.last = void 0;
function last(x) {
    return x[x.length - 1];
}
exports.last = last;
function first(x) {
    return x[0];
}
exports.first = first;
function intersperse(array, delim) {
    return array.flatMap((val) => [delim, val]).slice(1);
}
exports.intersperse = intersperse;
function isEmpty(col) {
    return col.length === 0;
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJpbnRlci91dGlscy9hcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQixJQUFJLENBQUksQ0FBTTtJQUM1QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFGRCxvQkFFQztBQUVELFNBQWdCLEtBQUssQ0FBSSxDQUFNO0lBQzdCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2QsQ0FBQztBQUZELHNCQUVDO0FBRUQsU0FBZ0IsV0FBVyxDQUFJLEtBQVUsRUFBRSxLQUFRO0lBQ2pELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLEdBQVU7SUFDaEMsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBRkQsMEJBRUMifQ==