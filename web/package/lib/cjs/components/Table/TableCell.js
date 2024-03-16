"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const tailwind_merge_1 = require("tailwind-merge");
const merge_deep_1 = require("../../helpers/merge-deep");
const TableBodyContext_1 = require("./TableBodyContext");
exports.TableCell = (0, react_1.forwardRef)(({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: bodyTheme } = (0, TableBodyContext_1.useTableBodyContext)();
    const theme = (0, merge_deep_1.mergeDeep)(bodyTheme.cell, customTheme);
    return ((0, jsx_runtime_1.jsx)("td", { className: (0, tailwind_merge_1.twMerge)(theme.base, className), ref: ref, ...props, children: children }));
});
exports.TableCell.displayName = 'Table.Cell';
