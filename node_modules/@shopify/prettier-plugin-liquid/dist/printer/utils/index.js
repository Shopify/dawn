"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNonEmptyArray = exports.ifBreakChain = exports.FORCE_BREAK_GROUP_ID = exports.FORCE_FLAT_GROUP_ID = exports.getWhitespaceTrim = exports.isDeeplyNested = exports.getSource = void 0;
const prettier_1 = require("prettier");
const parser_1 = require("../../parser");
const array_1 = require("../../printer/utils/array");
__exportStar(require("../../printer/utils/array"), exports);
__exportStar(require("../../printer/utils/string"), exports);
__exportStar(require("../../printer/utils/node"), exports);
const { builders } = prettier_1.doc;
const { ifBreak } = builders;
function getSource(path) {
    return path.getValue().source;
}
exports.getSource = getSource;
function isDeeplyNested(node) {
    if (!node.children)
        return false;
    if ((0, parser_1.isBranchedTag)(node)) {
        return !!node.children.find((child) => isDeeplyNested(child));
    }
    return !!node.children.find((child) => !(0, array_1.isEmpty)(child.children || []));
}
exports.isDeeplyNested = isDeeplyNested;
function getWhitespaceTrim(currWhitespaceTrim, needsWhitespaceStrippingOnBreak, groupIds) {
    return ifBreakChain(needsWhitespaceStrippingOnBreak ? '-' : currWhitespaceTrim, currWhitespaceTrim, Array.isArray(groupIds) ? groupIds : [groupIds]);
}
exports.getWhitespaceTrim = getWhitespaceTrim;
exports.FORCE_FLAT_GROUP_ID = Symbol('force-no-break');
exports.FORCE_BREAK_GROUP_ID = Symbol('force-break');
function ifBreakChain(breaksContent, flatContent, groupIds) {
    if (groupIds.includes(exports.FORCE_BREAK_GROUP_ID))
        return breaksContent;
    if (groupIds.includes(exports.FORCE_FLAT_GROUP_ID))
        return flatContent;
    return groupIds.reduce((currFlatContent, groupId) => ifBreak(breaksContent, currFlatContent, { groupId }), flatContent);
}
exports.ifBreakChain = ifBreakChain;
function isNonEmptyArray(object) {
    return Array.isArray(object) && object.length > 0;
}
exports.isNonEmptyArray = isNonEmptyArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJpbnRlci91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW9DO0FBRXBDLHFDQUF5QztBQUN6QyxpREFBZ0Q7QUFFaEQsd0RBQXNDO0FBQ3RDLHlEQUF1QztBQUN2Qyx1REFBcUM7QUFFckMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLGNBQUcsQ0FBQztBQUN6QixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDO0FBRTdCLFNBQWdCLFNBQVMsQ0FBQyxJQUFtQjtJQUMzQyxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7QUFDaEMsQ0FBQztBQUZELDhCQUVDO0FBRUQsU0FBZ0IsY0FBYyxDQUM1QixJQUE4RDtJQUU5RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNqQyxJQUFJLElBQUEsc0JBQWEsRUFBQyxJQUFJLENBQUMsRUFBRTtRQUN2QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ3BDLGNBQWMsQ0FBQyxLQUFxQixDQUFDLENBQ3RDLENBQUM7S0FDSDtJQUNELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN6QixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFBLGVBQU8sRUFBRSxLQUFhLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUNuRCxDQUFDO0FBQ0osQ0FBQztBQVpELHdDQVlDO0FBR0QsU0FBZ0IsaUJBQWlCLENBQy9CLGtCQUEwQixFQUMxQiwrQkFBb0QsRUFDcEQsUUFBNEI7SUFFNUIsT0FBTyxZQUFZLENBQ2pCLCtCQUErQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUMxRCxrQkFBa0IsRUFDbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUNoRCxDQUFDO0FBQ0osQ0FBQztBQVZELDhDQVVDO0FBR1ksUUFBQSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMvQyxRQUFBLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUUxRCxTQUFnQixZQUFZLENBQzFCLGFBQWtCLEVBQ2xCLFdBQWdCLEVBQ2hCLFFBQWdDO0lBRWhDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyw0QkFBb0IsQ0FBQztRQUFFLE9BQU8sYUFBYSxDQUFDO0lBQ2xFLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQywyQkFBbUIsQ0FBQztRQUFFLE9BQU8sV0FBVyxDQUFDO0lBQy9ELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FDcEIsQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FDM0IsT0FBTyxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUN0RCxXQUFXLENBQ1osQ0FBQztBQUNKLENBQUM7QUFaRCxvQ0FZQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxNQUFXO0lBQ3pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRkQsMENBRUMifQ==