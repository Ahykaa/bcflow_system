import type { ComponentProps, FC } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from '../Flowbite';
export interface FlowbiteBadgeTheme {
    root: FlowbiteBadgeRootTheme;
    icon: FlowbiteBadgeIconTheme;
}
export interface FlowbiteBadgeRootTheme {
    base: string;
    color: FlowbiteColors;
    href: string;
    size: BadgeSizes;
}
export interface FlowbiteBadgeIconTheme extends FlowbiteBoolean {
    size: BadgeSizes;
}
export interface BadgeSizes extends Pick<FlowbiteSizes, 'xs' | 'sm'> {
    [key: string]: string;
}
export interface BadgeProps extends Omit<ComponentProps<'span'>, 'color'> {
    color?: keyof FlowbiteColors;
    href?: string;
    icon?: FC<ComponentProps<'svg'>>;
    size?: keyof BadgeSizes;
    theme?: DeepPartial<FlowbiteBadgeTheme>;
}
export declare const Badge: FC<BadgeProps>;
