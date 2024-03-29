import type { ComponentProps, FC } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteColors, FlowbiteSizes } from '../Flowbite';
export interface FlowbiteProgressTheme {
    base: string;
    label: string;
    bar: string;
    color: ProgressColor;
    size: ProgressSizes;
}
export interface ProgressColor extends Pick<FlowbiteColors, 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'cyan' | 'gray' | 'lime' | 'pink' | 'teal'> {
    [key: string]: string;
}
export interface ProgressSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg' | 'xl'> {
    [key: string]: string;
}
export interface ProgressProps extends ComponentProps<'div'> {
    labelProgress?: boolean;
    labelText?: boolean;
    progress: number;
    progressLabelPosition?: 'inside' | 'outside';
    size?: keyof ProgressSizes;
    textLabel?: string;
    textLabelPosition?: 'inside' | 'outside';
    theme?: DeepPartial<FlowbiteProgressTheme>;
}
export declare const Progress: FC<ProgressProps>;
