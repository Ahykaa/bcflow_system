import type { FlowbiteTableBodyTheme } from './TableBody';
export type TableBodyContext = {
    theme: FlowbiteTableBodyTheme;
};
export declare const TableBodyContext: import("react").Context<TableBodyContext | undefined>;
export declare function useTableBodyContext(): TableBodyContext;
