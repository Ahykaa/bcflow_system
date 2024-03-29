import type { useInteractions } from '@floating-ui/react';
import type { FlowbiteDropdownTheme } from './Dropdown';
type DropdownContext = {
    theme: FlowbiteDropdownTheme;
    activeIndex: number | null;
    dismissOnClick?: boolean;
    getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
    handleSelect: (index: number | null) => void;
};
export declare const DropdownContext: import("react").Context<DropdownContext | undefined>;
export declare function useDropdownContext(): DropdownContext;
export {};
