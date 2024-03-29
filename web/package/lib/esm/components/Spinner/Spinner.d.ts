import type { ComponentProps, FC } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteColors, FlowbiteSizes } from '../Flowbite';
export interface FlowbiteSpinnerTheme {
    base: string;
    color: SpinnerColors;
    light: {
        off: {
            base: string;
            color: SpinnerColors;
        };
        on: {
            base: string;
            color: SpinnerColors;
        };
    };
    size: SpinnerSizes;
}
export interface SpinnerColors extends Pick<FlowbiteColors, 'failure' | 'gray' | 'info' | 'pink' | 'purple' | 'success' | 'warning'> {
    [key: string]: string;
}
export interface SpinnerSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
    [key: string]: string;
}
export interface SpinnerProps extends Omit<ComponentProps<'span'>, 'color'> {
    color?: keyof SpinnerColors;
    light?: boolean;
    size?: keyof SpinnerSizes;
    theme?: DeepPartial<FlowbiteSpinnerTheme>;
}
export declare const Spinner: FC<SpinnerProps>;
