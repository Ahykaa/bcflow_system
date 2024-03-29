import type { FlowbiteTableTheme } from './Table';
export type TableContext = {
    theme: FlowbiteTableTheme;
    striped?: boolean;
    hoverable?: boolean;
};
export declare const TableContext: import("react").Context<TableContext | undefined>;
export declare function useTableContext(): TableContext;
