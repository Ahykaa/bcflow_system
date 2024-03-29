import type { ComponentProps } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean, FlowbiteColors } from '../Flowbite';
import type { FlowbiteTextInputSizes } from '../TextInput';
export interface FlowbiteToggleSwitchTheme {
    root: FlowbiteToggleSwitchRootTheme;
    toggle: FlowbiteToggleSwitchToggleTheme;
}
export interface FlowbiteToggleSwitchRootTheme {
    base: string;
    active: FlowbiteBoolean;
    label: string;
}
export interface FlowbiteToggleSwitchToggleTheme {
    base: string;
    sizes: FlowbiteTextInputSizes;
    checked: FlowbiteBoolean & {
        color: FlowbiteColors;
    };
}
export type ToggleSwitchProps = Omit<ComponentProps<'button'>, 'onChange' | 'ref'> & {
    checked: boolean;
    color?: keyof FlowbiteColors;
    sizing?: keyof FlowbiteTextInputSizes;
    label?: string;
    onChange: (checked: boolean) => void;
    theme?: DeepPartial<FlowbiteToggleSwitchTheme>;
};
export declare const ToggleSwitch: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "onChange" | "ref"> & {
    checked: boolean;
    color?: keyof FlowbiteColors | undefined;
    sizing?: keyof FlowbiteTextInputSizes | undefined;
    label?: string | undefined;
    onChange: (checked: boolean) => void;
    theme?: {
        root?: {
            base?: string | undefined;
            active?: {
                off?: string | undefined;
                on?: string | undefined;
            } | undefined;
            label?: string | undefined;
        } | undefined;
        toggle?: {
            base?: string | undefined;
            sizes?: {
                [x: string]: string | undefined;
                sm?: string | undefined;
                md?: string | undefined;
                lg?: string | undefined;
            } | undefined;
            checked?: {
                off?: string | undefined;
                on?: string | undefined;
                color?: {
                    [x: string]: string | undefined;
                    blue?: string | undefined;
                    cyan?: string | undefined;
                    dark?: string | undefined;
                    gray?: string | undefined;
                    green?: string | undefined;
                    indigo?: string | undefined;
                    light?: string | undefined;
                    lime?: string | undefined;
                    pink?: string | undefined;
                    purple?: string | undefined;
                    red?: string | undefined;
                    teal?: string | undefined;
                    yellow?: string | undefined;
                    info?: string | undefined;
                    failure?: string | undefined;
                    success?: string | undefined;
                    warning?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
