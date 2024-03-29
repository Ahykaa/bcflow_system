import type { FlowbiteTableHeadTheme } from './TableHead';
export type TableHeadContext = {
    theme: FlowbiteTableHeadTheme;
};
export declare const TableHeadContext: import("react").Context<TableHeadContext | undefined>;
export declare function useTableHeadContext(): TableHeadContext;
