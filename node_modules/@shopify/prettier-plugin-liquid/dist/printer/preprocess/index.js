"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUGMENTATION_PIPELINE = void 0;
const augment_with_css_properties_1 = require("../../printer/preprocess/augment-with-css-properties");
const augment_with_parent_1 = require("../../printer/preprocess/augment-with-parent");
const augment_with_siblings_1 = require("../../printer/preprocess/augment-with-siblings");
const augment_with_whitespace_helpers_1 = require("../../printer/preprocess/augment-with-whitespace-helpers");
const augment_with_family_1 = require("../../printer/preprocess/augment-with-family");
exports.AUGMENTATION_PIPELINE = [
    augment_with_parent_1.augmentWithParent,
    augment_with_siblings_1.augmentWithSiblings,
    augment_with_family_1.augmentWithFamily,
    augment_with_css_properties_1.augmentWithCSSProperties,
    augment_with_whitespace_helpers_1.augmentWithWhitespaceHelpers,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJpbnRlci9wcmVwcm9jZXNzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtHQUE0RjtBQUM1RixrRkFBNkU7QUFDN0Usc0ZBQWlGO0FBQ2pGLDBHQUFvRztBQUNwRyxrRkFBNkU7QUFFaEUsUUFBQSxxQkFBcUIsR0FBRztJQUNuQyx1Q0FBaUI7SUFDakIsMkNBQW1CO0lBQ25CLHVDQUFpQjtJQUNqQixzREFBd0I7SUFDeEIsOERBQTRCO0NBQzdCLENBQUMifQ==