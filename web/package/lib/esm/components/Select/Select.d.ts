import type { ComponentProps, FC, ReactNode } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from '../Flowbite';
export interface FlowbiteSelectTheme {
    base: string;
    addon: string;
    field: {
        base: string;
        icon: {
            base: string;
            svg: string;
        };
        select: {
            base: string;
            withIcon: FlowbiteBoolean;
            withAddon: FlowbiteBoolean;
            withShadow: FlowbiteBoolean;
            sizes: SelectSizes;
            colors: SelectColors;
        };
    };
}
export interface SelectColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
    [key: string]: string;
}
export interface SelectSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
    [key: string]: string;
}
export interface SelectProps extends Omit<ComponentProps<'select'>, 'color' | 'ref'> {
    addon?: ReactNode;
    color?: keyof SelectColors;
    helperText?: ReactNode;
    icon?: FC<ComponentProps<'svg'>>;
    shadow?: boolean;
    sizing?: keyof SelectSizes;
    theme?: DeepPartial<FlowbiteSelectTheme>;
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
