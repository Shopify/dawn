"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printChildren = void 0;
const prettier_1 = require("prettier");
const utils_1 = require("../../utils");
const types_1 = require("../../types");
const utils_2 = require("../../printer/utils");
const tag_1 = require("../../printer/print/tag");
const { builders: { breakParent, group, ifBreak, line, softline, hardline }, } = prettier_1.doc;
const { replaceTextEndOfLine } = prettier_1.doc.utils;
function printChild(childPath, options, print, args) {
    const child = childPath.getValue();
    if ((0, utils_2.hasPrettierIgnore)(child)) {
        const isPrevBorrowingOpeningMarker = child.prev && (0, tag_1.needsToBorrowNextOpeningTagStartMarker)(child.prev);
        const bodyStartOffset = isPrevBorrowingOpeningMarker
            ? (0, tag_1.printOpeningTagStartMarker)(child).length
            : 0;
        const bodyStart = (0, utils_1.locStart)(child) + bodyStartOffset;
        const isNextBorrowingClosingMarker = child.next && (0, tag_1.needsToBorrowPrevClosingTagEndMarker)(child.next);
        const bodyEndOffset = isNextBorrowingClosingMarker
            ? (0, tag_1.printClosingTagEndMarker)(child, options).length
            : 0;
        const bodyEnd = (0, utils_1.locEnd)(child) - bodyEndOffset;
        let rawContent = options.originalText.slice(bodyStart, bodyEnd);
        if (child.type === types_1.NodeTypes.HtmlElement && isNextBorrowingClosingMarker) {
            rawContent = rawContent.trimEnd();
        }
        return [
            (0, tag_1.printOpeningTagPrefix)(child, options),
            ...replaceTextEndOfLine(rawContent),
            (0, tag_1.printClosingTagSuffix)(child, options),
        ];
    }
    return print(childPath, args);
}
function printBetweenLine(prevNode, nextNode) {
    if (!prevNode || !nextNode)
        return '';
    const spaceBetweenLinesIsHandledSomewhereElse = ((0, tag_1.needsToBorrowNextOpeningTagStartMarker)(prevNode) &&
        ((0, utils_2.hasPrettierIgnore)(nextNode) ||
            nextNode.firstChild ||
            (0, utils_2.hasNoCloseMarker)(nextNode) ||
            (nextNode.type === types_1.NodeTypes.HtmlElement &&
                nextNode.attributes.length > 0))) ||
        (prevNode.type === types_1.NodeTypes.HtmlElement &&
            (0, utils_2.hasNoCloseMarker)(prevNode) &&
            (0, tag_1.needsToBorrowPrevClosingTagEndMarker)(nextNode));
    if (spaceBetweenLinesIsHandledSomewhereElse) {
        return '';
    }
    const shouldUseHardline = !nextNode.isLeadingWhitespaceSensitive ||
        (0, utils_2.preferHardlineAsLeadingSpaces)(nextNode) ||
        ((0, tag_1.needsToBorrowPrevClosingTagEndMarker)(nextNode) &&
            prevNode.lastChild &&
            (0, tag_1.needsToBorrowParentClosingTagStartMarker)(prevNode.lastChild) &&
            prevNode.lastChild.lastChild &&
            (0, tag_1.needsToBorrowParentClosingTagStartMarker)(prevNode.lastChild.lastChild));
    if (shouldUseHardline) {
        return hardline;
    }
    return nextNode.hasLeadingWhitespace ? line : softline;
}
function printChildren(path, options, print, args) {
    const node = path.getValue();
    if (!node.children) {
        throw new Error('attempting to use printChildren on something without children');
    }
    if ((0, utils_2.forceBreakChildren)(node)) {
        return [
            breakParent,
            ...path.map((childPath) => {
                const childNode = childPath.getValue();
                const prevBetweenLine = printBetweenLine(childNode.prev, childNode);
                return [
                    !prevBetweenLine
                        ? ''
                        : [
                            prevBetweenLine,
                            (0, utils_2.forceNextEmptyLine)(childNode.prev) ? hardline : '',
                        ],
                    printChild(childPath, options, print, Object.assign(Object.assign({}, args), { leadingSpaceGroupId: utils_2.FORCE_BREAK_GROUP_ID, trailingSpaceGroupId: utils_2.FORCE_BREAK_GROUP_ID })),
                ];
            }, 'children'),
        ];
    }
    const leadingSpaceGroupIds = node.children.map((_, i) => Symbol(`leading-${i}`));
    const trailingSpaceGroupIds = node.children.map((_, i) => Symbol(`trailing-${i}`));
    const whitespaceBetweenNode = path.map((childPath, childIndex) => {
        const childNode = childPath.getValue();
        const leadingHardlines = [];
        const leadingWhitespace = [];
        const leadingDependentWhitespace = [];
        const trailingWhitespace = [];
        const trailingHardlines = [];
        const prevBetweenLine = printBetweenLine(childNode.prev, childNode);
        const nextBetweenLine = printBetweenLine(childNode, childNode.next);
        if ((0, utils_2.isTextLikeNode)(childNode)) {
            return {
                leadingHardlines,
                leadingWhitespace,
                leadingDependentWhitespace,
                trailingWhitespace,
                trailingHardlines,
            };
        }
        if (prevBetweenLine) {
            if ((0, utils_2.forceNextEmptyLine)(childNode.prev)) {
                leadingHardlines.push(hardline, hardline);
            }
            else if (prevBetweenLine === hardline) {
                leadingHardlines.push(hardline);
            }
            else {
                if ((0, utils_2.isTextLikeNode)(childNode.prev)) {
                    if ((0, utils_2.isLiquidNode)(childNode) && prevBetweenLine === softline) {
                        leadingDependentWhitespace.push(prevBetweenLine);
                    }
                    else {
                        leadingWhitespace.push(prevBetweenLine);
                    }
                }
                else {
                    leadingWhitespace.push(ifBreak('', softline, {
                        groupId: trailingSpaceGroupIds[childIndex - 1],
                    }));
                }
            }
        }
        if (nextBetweenLine) {
            if ((0, utils_2.forceNextEmptyLine)(childNode)) {
                if ((0, utils_2.isTextLikeNode)(childNode.next)) {
                    trailingHardlines.push(hardline, hardline);
                }
            }
            else if (nextBetweenLine === hardline) {
                if ((0, utils_2.isTextLikeNode)(childNode.next)) {
                    trailingHardlines.push(hardline);
                }
            }
            else {
                trailingWhitespace.push(nextBetweenLine);
            }
        }
        return {
            leadingHardlines,
            leadingWhitespace,
            leadingDependentWhitespace,
            trailingWhitespace,
            trailingHardlines,
        };
    }, 'children');
    return path.map((childPath, childIndex) => {
        const { leadingHardlines, leadingWhitespace, leadingDependentWhitespace, trailingWhitespace, trailingHardlines, } = whitespaceBetweenNode[childIndex];
        return [
            ...leadingHardlines,
            group([
                ...leadingWhitespace,
                group([
                    ...leadingDependentWhitespace,
                    printChild(childPath, options, print, Object.assign(Object.assign({}, args), { leadingSpaceGroupId: leadingSpaceGroupId(whitespaceBetweenNode, childIndex), trailingSpaceGroupId: trailingSpaceGroupId(whitespaceBetweenNode, childIndex) })),
                    ...trailingWhitespace,
                ], {
                    id: trailingSpaceGroupIds[childIndex],
                }),
            ], {
                id: leadingSpaceGroupIds[childIndex],
            }),
            ...trailingHardlines,
        ];
    }, 'children');
    function leadingSpaceGroupId(whitespaceBetweenNode, index) {
        if (index === 0) {
            return args.leadingSpaceGroupId;
        }
        const prev = whitespaceBetweenNode[index - 1];
        const curr = whitespaceBetweenNode[index];
        const groupIds = [];
        if (!(0, utils_2.isEmpty)(prev.trailingHardlines) || !(0, utils_2.isEmpty)(curr.leadingHardlines)) {
            return utils_2.FORCE_BREAK_GROUP_ID;
        }
        if (!(0, utils_2.isEmpty)(prev.trailingWhitespace)) {
            groupIds.push(trailingSpaceGroupIds[index - 1]);
        }
        if (!(0, utils_2.isEmpty)(curr.leadingWhitespace)) {
            groupIds.push(leadingSpaceGroupIds[index]);
        }
        if (!(0, utils_2.isEmpty)(curr.leadingDependentWhitespace)) {
            groupIds.push(trailingSpaceGroupIds[index]);
        }
        if ((0, utils_2.isEmpty)(groupIds)) {
            groupIds.push(utils_2.FORCE_FLAT_GROUP_ID);
        }
        return groupIds;
    }
    function trailingSpaceGroupId(whitespaceBetweenNode, index) {
        if (index === whitespaceBetweenNode.length - 1) {
            return args.trailingSpaceGroupId;
        }
        const curr = whitespaceBetweenNode[index];
        const next = whitespaceBetweenNode[index + 1];
        const groupIds = [];
        if (!(0, utils_2.isEmpty)(curr.trailingHardlines) || !(0, utils_2.isEmpty)(next.leadingHardlines)) {
            return utils_2.FORCE_BREAK_GROUP_ID;
        }
        if (!(0, utils_2.isEmpty)(curr.trailingWhitespace)) {
            groupIds.push(trailingSpaceGroupIds[index]);
        }
        if ((0, utils_2.isEmpty)(groupIds)) {
            groupIds.push(utils_2.FORCE_FLAT_GROUP_ID);
        }
        return groupIds;
    }
}
exports.printChildren = printChildren;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGRyZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJpbnRlci9wcmludC9jaGlsZHJlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBd0M7QUFDeEMsbUNBQTJDO0FBQzNDLG1DQU9pQjtBQUNqQiwyQ0FXeUI7QUFDekIsNkNBUTZCO0FBRTdCLE1BQU0sRUFDSixRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUNwRSxHQUFHLGNBQUcsQ0FBQztBQUNSLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLGNBQUcsQ0FBQyxLQUFZLENBQUM7QUFFbEQsU0FBUyxVQUFVLENBQ2pCLFNBQXdCLEVBQ3hCLE9BQTRCLEVBQzVCLEtBQW9CLEVBQ3BCLElBQXVCO0lBRXZCLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVuQyxJQUFJLElBQUEseUJBQWlCLEVBQUMsS0FBSyxDQUFDLEVBQUU7UUFDNUIsTUFBTSw0QkFBNEIsR0FDaEMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFBLDRDQUFzQyxFQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxNQUFNLGVBQWUsR0FBRyw0QkFBNEI7WUFDbEQsQ0FBQyxDQUFDLElBQUEsZ0NBQTBCLEVBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtZQUMxQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ04sTUFBTSxTQUFTLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxHQUFHLGVBQWUsQ0FBQztRQUVwRCxNQUFNLDRCQUE0QixHQUNoQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUEsMENBQW9DLEVBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR2pFLE1BQU0sYUFBYSxHQUFHLDRCQUE0QjtZQUNoRCxDQUFDLENBQUMsSUFBQSw4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