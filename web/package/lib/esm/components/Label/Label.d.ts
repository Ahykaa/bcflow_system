import type { ComponentProps, FC } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteStateColors } from '../Flowbite';
export interface FlowbiteLabelTheme {
    root: FlowbiteLabelRootTheme;
}
export interface FlowbiteLabelRootTheme {
    base: string;
    colors: LabelColors;
    disabled: string;
}
export interface LabelColors extends FlowbiteStateColors {
    [key: string]: string;
    default: string;
}
export interface LabelProps extends Omit<ComponentProps<'label'>, 'color'> {
    color?: keyof LabelColors;
    disabled?: boolean;
    theme?: DeepPartial<FlowbiteLabelTheme>;
    value?: string;
}
export declare const Label: FC<LabelProps>;
