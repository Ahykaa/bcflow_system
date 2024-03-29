import type { ComponentProps, FC, ReactNode } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteColors } from '../Flowbite';
export interface FlowbiteAlertTheme {
    base: string;
    borderAccent: string;
    closeButton: FlowbiteAlertCloseButtonTheme;
    color: FlowbiteColors;
    icon: string;
    rounded: string;
    wrapper: string;
}
export interface FlowbiteAlertCloseButtonTheme {
    base: string;
    color: FlowbiteColors;
    icon: string;
}
export interface AlertProps extends Omit<ComponentProps<'div'>, 'color'> {
    additionalContent?: ReactNode;
    color?: keyof FlowbiteColors;
    icon?: FC<ComponentProps<'svg'>>;
    onDismiss?: boolean | (() => void);
    rounded?: boolean;
    theme?: DeepPartial<FlowbiteAlertTheme>;
    withBorderAccent?: boolean;
}
export declare const Alert: FC<AlertProps>;
