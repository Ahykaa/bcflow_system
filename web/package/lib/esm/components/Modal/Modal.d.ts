import type { MutableRefObject } from 'react';
import { type ComponentPropsWithoutRef } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean, FlowbitePositions, FlowbiteSizes } from '../Flowbite';
import type { FlowbiteModalBodyTheme } from './ModalBody';
import type { FlowbiteModalFooterTheme } from './ModalFooter';
import type { FlowbiteModalHeaderTheme } from './ModalHeader';
export interface FlowbiteModalTheme {
    root: FlowbiteModalRootTheme;
    content: FlowbiteModalContentTheme;
    body: FlowbiteModalBodyTheme;
    header: FlowbiteModalHeaderTheme;
    footer: FlowbiteModalFooterTheme;
}
export interface FlowbiteModalRootTheme {
    base: string;
    show: FlowbiteBoolean;
    sizes: ModalSizes;
    positions: ModalPositions;
}
export interface FlowbiteModalContentTheme {
    base: string;
    inner: string;
}
export interface ModalPositions extends FlowbitePositions {
    [key: string]: string;
}
export interface ModalSizes extends Omit<FlowbiteSizes, 'xs'> {
    [key: string]: string;
}
export interface ModalProps extends ComponentPropsWithoutRef<'div'> {
    onClose?: () => void;
    position?: keyof ModalPositions;
    popup?: boolean;
    root?: HTMLElement;
    show?: boolean;
    size?: keyof ModalSizes;
    dismissible?: boolean;
    theme?: DeepPartial<FlowbiteModalTheme>;
    initialFocus?: number | MutableRefObject<HTMLElement | null>;
}
export declare const Modal: import("react").ForwardRefExoticComponent<ModalProps & import("react").RefAttributes<HTMLDivElement>> & {
    Header: import("react").FC<import("./ModalHeader").ModalHeaderProps>;
    Body: import("react").FC<import("./ModalBody").ModalBodyProps>;
    Footer: import("react").FC<import("./ModalFooter").ModalFooterProps>;
};
