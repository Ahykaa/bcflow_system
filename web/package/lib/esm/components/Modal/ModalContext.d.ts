import type { FlowbiteModalTheme } from './Modal';
type ModalContext = {
    theme: FlowbiteModalTheme;
    popup?: boolean;
    setHeaderId: (id: string | undefined) => void;
    onClose?: () => void;
};
export declare const ModalContext: import("react").Context<ModalContext | undefined>;
export declare function useModalContext(): ModalContext;
export {};
