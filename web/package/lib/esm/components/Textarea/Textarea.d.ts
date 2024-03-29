import type { ComponentProps, ReactNode } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean, FlowbiteColors } from '../Flowbite';
export interface FlowbiteTextareaTheme {
    base: string;
    colors: TextareaColors;
    withShadow: FlowbiteBoolean;
}
export interface TextareaColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
    [key: string]: string;
}
export interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'color' | 'ref'> {
    color?: keyof TextareaColors;
    helperText?: ReactNode;
    shadow?: boolean;
    theme?: DeepPartial<FlowbiteTextareaTheme>;
}
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
