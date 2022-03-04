export const FilterType = {
    IncludeOnlyIf: "IncludeOnlyIf",
};

export const FilterOperator = {
    "==": function (a, b, isArray, f_value) {
        return !isArray ? a === b : a.indexOf(f_value) > -1;
    },
    "!=": function (a, b, isArray, f_value) {
        return !isArray ? a === b : a.indexOf(f_value) === -1;
    },
};
