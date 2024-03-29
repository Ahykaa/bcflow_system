import type { ComponentProps } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean } from '../Flowbite';
import type { TabItemProps } from './TabItem';
export interface FlowbiteTabsTheme {
    base: string;
    tablist: {
        base: string;
        styles: TabStyles;
        tabitem: {
            base: string;
            styles: TabStyleItem<TabStyles>;
            icon: string;
        };
    };
    tabitemcontainer: {
        base: string;
        styles: TabStyles;
    };
    tabpanel: string;
}
export interface TabStyles {
    default: string;
    fullWidth: string;
    pills: string;
    underline: string;
}
export interface TabStyleItemProps {
    base: string;
    active: FlowbiteBoolean;
}
export type TabStyleItem<Type> = {
    [K in keyof Type]: TabStyleItemProps;
};
export type TabItemStatus = 'active' | 'notActive';
export interface TabsProps extends Omit<ComponentProps<'div'>, 'ref' | 'style'> {
    onActiveTabChange?: (activeTab: number) => void;
    style?: keyof TabStyles;
    theme?: DeepPartial<FlowbiteTabsTheme>;
}
export interface TabsRef {
    setActiveTab: (activeTab: number) => void;
}
export declare const Tabs: import("react").ForwardRefExoticComponent<TabsProps & import("react").RefAttributes<TabsRef>> & {
    Item: import("react").FC<TabItemProps>;
};
