"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embed = exports.ParserMap = void 0;
const prettier_1 = require("prettier");
const parser_1 = require("../parser");
const types_1 = require("../types");
exports.ParserMap = {
    [parser_1.RawMarkupKinds.css]: 'css',
    [parser_1.RawMarkupKinds.html]: null,
    [parser_1.RawMarkupKinds.javascript]: 'babel',
    [parser_1.RawMarkupKinds.json]: 'json',
    [parser_1.RawMarkupKinds.markdown]: 'markdown',
    [parser_1.RawMarkupKinds.typescript]: 'typescript',
    [parser_1.RawMarkupKinds.text]: null,
};
const embed = (path, _print, textToDoc, options) => {
    const node = path.getValue();
    switch (node.type) {
        case types_1.NodeTypes.RawMarkup: {
            const parser = exports.ParserMap[node.kind];
            if (parser && node.value.trim() !== '') {
                return prettier_1.doc.utils.stripTrailingHardline(textToDoc(node.value, Object.assign(Object.assign({}, options), { singleQuote: options.embeddedSingleQuote, parser, __embeddedInHtml: true })));
            }
        }
        default:
            return null;
    }
};
exports.embed = embed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1iZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJpbnRlci9lbWJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBd0M7QUFDeEMscUNBQTBDO0FBQzFDLG1DQUF5RTtBQUc1RCxRQUFBLFNBQVMsR0FBK0M7SUFDbkUsQ0FBQyx1QkFBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUs7SUFDM0IsQ0FBQyx1QkFBYyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUk7SUFDM0IsQ0FBQyx1QkFBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU87SUFDcEMsQ0FBQyx1QkFBYyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU07SUFDN0IsQ0FBQyx1QkFBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVU7SUFDckMsQ0FBQyx1QkFBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFlBQVk7SUFDekMsQ0FBQyx1QkFBYyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUk7Q0FDNUIsQ0FBQztBQUVLLE1BQU0sS0FBSyxHQUFxQyxDQUNyRCxJQUFJLEVBQ0osTUFBTSxFQUNOLFNBQVMsRUFDVCxPQUFPLEVBQ1AsRUFBRTtJQUNGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sTUFBTSxHQUFHLGlCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN0QyxPQUFPLGNBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQ3BDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxrQ0FDZixPQUFPLEtBQ1YsV0FBVyxFQUFHLE9BQStCLENBQUMsbUJBQW1CLEVBQ2pFLE1BQU0sRUFDTixnQkFBZ0IsRUFBRSxJQUFJLElBQ3RCLENBQ0gsQ0FBQzthQUNIO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDSCxDQUFDLENBQUM7QUF4QlcsUUFBQSxLQUFLLFNBd0JoQiJ9