import type { FlowbiteSidebarTheme } from './Sidebar';
export type SidebarContext = {
    theme: FlowbiteSidebarTheme;
    isCollapsed: boolean;
};
export declare const SidebarContext: import("react").Context<SidebarContext | undefined>;
export declare function useSidebarContext(): SidebarContext;
