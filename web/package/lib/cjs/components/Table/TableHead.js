"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHead = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const tailwind_merge_1 = require("tailwind-merge");
const merge_deep_1 = require("../../helpers/merge-deep");
const TableContext_1 = require("./TableContext");
const TableHeadContext_1 = require("./TableHeadContext");
exports.TableHead = (0, react_1.forwardRef)(({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme } = (0, TableContext_1.useTableContext)();
    const theme = (0, merge_deep_1.mergeDeep)(rootTheme.head, customTheme);
    return ((0, jsx_runtime_1.jsx)(TableHeadContext_1.TableHeadContext.Provider, { value: { theme }, children: (0, jsx_runtime_1.jsx)("thead", { className: (0, tailwind_merge_1.twMerge)(theme.base, className), ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("tr", { children: children }) }) }));
});
exports.TableHead.displayName = 'Table.Head';
