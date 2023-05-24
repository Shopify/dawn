"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropLast = exports.deepGet = exports.locEnd = exports.locStart = exports.assertNever = void 0;
function assertNever(x) {
    throw new Error(`Unexpected object: ${x.type}`);
}
exports.assertNever = assertNever;
function locStart(node) {
    return node.position.start;
}
exports.locStart = locStart;
function locEnd(node) {
    return node.position.end;
}
exports.locEnd = locEnd;
function deepGet(path, obj) {
    return path.reduce((curr, k) => {
        if (curr && curr[k] !== undefined)
            return curr[k];
        return undefined;
    }, obj);
}
exports.deepGet = deepGet;
function dropLast(n, xs) {
    const result = [...xs];
    for (let i = 0; i < n; i++) {
        result.pop();
    }
    return result;
}
exports.dropLast = dropLast;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsU0FBZ0IsV0FBVyxDQUFDLENBQVE7SUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBdUIsQ0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLElBQTRCO0lBQ25ELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7QUFDN0IsQ0FBQztBQUZELDRCQUVDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLElBQTRCO0lBQ2pELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDM0IsQ0FBQztBQUZELHdCQUVDO0FBRUQsU0FBZ0IsT0FBTyxDQUFVLElBQXlCLEVBQUUsR0FBUTtJQUNsRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsQ0FBa0IsRUFBRSxFQUFFO1FBQ25ELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUxELDBCQUtDO0FBRUQsU0FBZ0IsUUFBUSxDQUFJLENBQVMsRUFBRSxFQUFnQjtJQUNyRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDZDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFORCw0QkFNQyJ9