"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBody = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const tailwind_merge_1 = require("tailwind-merge");
const merge_deep_1 = require("../../helpers/merge-deep");
const TableBodyContext_1 = require("./TableBodyContext");
const TableContext_1 = require("./TableContext");
exports.TableBody = (0, react_1.forwardRef)(({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme } = (0, TableContext_1.useTableContext)();
    const theme = (0, merge_deep_1.mergeDeep)(rootTheme.body, customTheme);
    return ((0, jsx_runtime_1.jsx)(TableBodyContext_1.TableBodyContext.Provider, { value: { theme }, children: (0, jsx_runtime_1.jsx)("tbody", { className: (0, tailwind_merge_1.twMerge)(theme.base, className), ref: ref, ...props, children: children }) }));
});
exports.TableBody.displayName = 'Table.Body';
