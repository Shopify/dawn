"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidHTMLASTParsingError = exports.LiquidHTMLCSTParsingError = void 0;
const line_column_1 = __importDefault(require("line-column"));
class LiquidHTMLCSTParsingError extends SyntaxError {
    constructor(ohm) {
        super(ohm.shortMessage);
        this.name = 'LiquidHTMLParsingError';
        const input = ohm.input;
        const errorPos = ohm._rightmostFailurePosition;
        const lineCol = (0, line_column_1.default)(input).fromIndex(Math.min(errorPos, input.length - 1));
        if (lineCol) {
            this.loc = {
                start: {
                    line: lineCol.line,
                    column: lineCol.col,
                },
                end: {
                    line: lineCol.line,
                    column: lineCol.col,
                },
            };
        }
    }
}
exports.LiquidHTMLCSTParsingError = LiquidHTMLCSTParsingError;
class LiquidHTMLASTParsingError extends SyntaxError {
    constructor(message, source, startIndex, endIndex) {
        super(message);
        this.name = 'LiquidHTMLParsingError';
        const lc = (0, line_column_1.default)(source);
        const start = lc.fromIndex(startIndex);
        const end = lc.fromIndex(Math.min(endIndex, source.length - 1));
        this.loc = {
            start: {
                line: start.line,
                column: start.col,
            },
            end: {
                line: end.line,
                column: end.col,
            },
        };
    }
}
exports.LiquidHTMLASTParsingError = LiquidHTMLASTParsingError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhcnNlci9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsOERBQXFDO0FBT3JDLE1BQWEseUJBQTBCLFNBQVEsV0FBVztJQUd4RCxZQUFZLEdBQWdCO1FBQzFCLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyx3QkFBd0IsQ0FBQztRQUVyQyxNQUFNLEtBQUssR0FBSSxHQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE1BQU0sUUFBUSxHQUFJLEdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztRQUN4RCxNQUFNLE9BQU8sR0FBRyxJQUFBLHFCQUFVLEVBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUNyQyxDQUFDO1FBS0YsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsR0FBRyxHQUFHO2dCQUNULEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7b0JBQ2xCLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRztpQkFDcEI7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDbEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHO2lCQUNwQjthQUNGLENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRjtBQTdCRCw4REE2QkM7QUFFRCxNQUFhLHlCQUEwQixTQUFRLFdBQVc7SUFHeEQsWUFDRSxPQUFlLEVBQ2YsTUFBYyxFQUNkLFVBQWtCLEVBQ2xCLFFBQWdCO1FBRWhCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsd0JBQXdCLENBQUM7UUFFckMsTUFBTSxFQUFFLEdBQUcsSUFBQSxxQkFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFLaEUsSUFBSSxDQUFDLEdBQUcsR0FBRztZQUNULEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsS0FBTSxDQUFDLElBQUk7Z0JBQ2pCLE1BQU0sRUFBRSxLQUFNLENBQUMsR0FBRzthQUNuQjtZQUNELEdBQUcsRUFBRTtnQkFDSCxJQUFJLEVBQUUsR0FBSSxDQUFDLElBQUk7Z0JBQ2YsTUFBTSxFQUFFLEdBQUksQ0FBQyxHQUFHO2FBQ2pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQTlCRCw4REE4QkMifQ==