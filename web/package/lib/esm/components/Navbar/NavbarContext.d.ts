import type { FlowbiteNavbarTheme } from './Navbar';
type NavbarContext = {
    theme: FlowbiteNavbarTheme;
    isOpen?: boolean;
    setIsOpen: (isOpen: boolean) => void;
};
export declare const NavbarContext: import("react").Context<NavbarContext | undefined>;
export declare function useNavbarContext(): NavbarContext;
export {};
