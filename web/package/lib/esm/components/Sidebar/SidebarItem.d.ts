import type { ComponentProps, ElementType, FC } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteColors } from '../Flowbite';
export interface FlowbiteSidebarItemTheme {
    active: string;
    base: string;
    collapsed: {
        insideCollapse: string;
        noIcon: string;
    };
    content: {
        base: string;
    };
    icon: {
        base: string;
        active: string;
    };
    label: string;
    listItem: string;
}
export interface SidebarItemProps extends Omit<ComponentProps<'div'>, 'ref'>, Record<string, unknown> {
    active?: boolean;
    as?: ElementType;
    href?: string;
    icon?: FC<ComponentProps<'svg'>>;
    label?: string;
    labelColor?: keyof SidebarItemLabelColors;
    theme?: DeepPartial<FlowbiteSidebarItemTheme>;
}
export interface SidebarItemLabelColors extends Pick<FlowbiteColors, 'gray'> {
    [key: string]: string;
}
export declare const SidebarItem: import("react").ForwardRefExoticComponent<Omit<SidebarItemProps, "ref"> & import("react").RefAttributes<Element>>;
