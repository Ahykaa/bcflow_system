import type { ComponentProps } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteTextInputSizes } from '../TextInput';
export interface FlowbiteRangeSliderTheme {
    root: FlowbiteRangeSliderRootTheme;
    field: FlowbiteRangeSliderFieldTheme;
}
export interface FlowbiteRangeSliderRootTheme {
    base: string;
}
export interface FlowbiteRangeSliderFieldTheme {
    base: string;
    input: {
        base: string;
        sizes: FlowbiteTextInputSizes;
    };
}
export interface RangeSliderProps extends Omit<ComponentProps<'input'>, 'ref' | 'type'> {
    sizing?: keyof FlowbiteTextInputSizes;
    theme?: DeepPartial<FlowbiteRangeSliderTheme>;
}
export declare const RangeSlider: import("react").ForwardRefExoticComponent<RangeSliderProps & import("react").RefAttributes<HTMLInputElement>>;
