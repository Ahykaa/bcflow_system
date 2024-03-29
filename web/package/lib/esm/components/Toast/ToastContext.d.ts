import type { FlowbiteToastTheme } from './Toast';
export type Duration = 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
type ToastContext = {
    theme: FlowbiteToastTheme;
    duration?: Duration;
    isClosed?: boolean;
    isRemoved?: boolean;
    setIsClosed: (isClosed: boolean) => void;
    setIsRemoved: (isRemoved: boolean) => void;
};
export declare const ToastContext: import("react").Context<ToastContext | undefined>;
export declare function useToastContext(): ToastContext;
export {};
