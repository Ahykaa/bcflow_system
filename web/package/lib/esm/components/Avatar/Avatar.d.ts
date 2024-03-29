import type { ComponentProps, FC, ReactElement } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean, FlowbiteColors, FlowbitePositions, FlowbiteSizes } from '../Flowbite';
import type { FlowbiteAvatarGroupTheme } from './AvatarGroup';
import type { FlowbiteAvatarGroupCounterTheme } from './AvatarGroupCounter';
export interface FlowbiteAvatarTheme {
    root: FlowbiteAvatarRootTheme;
    group: FlowbiteAvatarGroupTheme;
    groupCounter: FlowbiteAvatarGroupCounterTheme;
}
export interface FlowbiteAvatarRootTheme {
    base: string;
    bordered: string;
    color: AvatarColors;
    img: FlowbiteAvatarImageTheme;
    initials: FlowbiteAvatarInitialsTheme;
    rounded: string;
    size: AvatarSizes;
    stacked: string;
    status: FlowbiteAvatarStatusTheme;
    statusPosition: FlowbitePositions;
}
export interface FlowbiteAvatarImageTheme extends FlowbiteBoolean {
    base: string;
    placeholder: string;
}
export interface FlowbiteAvatarStatusTheme {
    away: string;
    base: string;
    busy: string;
    offline: string;
    online: string;
}
export interface FlowbiteAvatarInitialsTheme {
    base: string;
    text: string;
}
export interface AvatarColors extends Pick<FlowbiteColors, 'failure' | 'gray' | 'info' | 'pink' | 'purple' | 'success' | 'warning'> {
    [key: string]: string;
}
export interface AvatarSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
    [key: string]: string;
}
export interface AvatarImageProps {
    alt?: string;
    className: string;
    'data-testid': string;
}
export interface AvatarProps extends Omit<ComponentProps<'div'>, 'color'> {
    alt?: string;
    bordered?: boolean;
    img?: string | ((props: AvatarImageProps) => ReactElement);
    color?: keyof AvatarColors;
    rounded?: boolean;
    size?: keyof AvatarSizes;
    stacked?: boolean;
    status?: 'away' | 'busy' | 'offline' | 'online';
    statusPosition?: keyof FlowbitePositions;
    placeholderInitials?: string;
    theme?: DeepPartial<FlowbiteAvatarTheme>;
}
export declare const Avatar: FC<AvatarProps> & {
    Group: FC<import("./AvatarGroup").AvatarGroupProps>;
    Counter: FC<import("./AvatarGroupCounter").AvatarGroupCounterProps>;
};
