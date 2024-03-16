"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeadCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const tailwind_merge_1 = require("tailwind-merge");
const merge_deep_1 = require("../../helpers/merge-deep");
const TableHeadContext_1 = require("./TableHeadContext");
exports.TableHeadCell = (0, react_1.forwardRef)(({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: headTheme } = (0, TableHeadContext_1.useTableHeadContext)();
    const theme = (0, merge_deep_1.mergeDeep)(headTheme.cell, customTheme);
    return ((0, jsx_runtime_1.jsx)("th", { className: (0, tailwind_merge_1.twMerge)(theme.base, className), ref: ref, ...props, children: children }));
});
exports.TableHeadCell.displayName = 'Table.HeadCell';
