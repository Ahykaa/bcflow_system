import type { ComponentProps, ReactNode } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteTextInputColors, FlowbiteTextInputSizes } from '../TextInput';
export interface FlowbiteFileInputTheme {
    root: FlowbiteFileInputRootTheme;
    field: FlowbiteFileInputFieldTheme;
}
export interface FlowbiteFileInputRootTheme {
    base: string;
}
export interface FlowbiteFileInputFieldTheme {
    base: string;
    input: FlowbiteFileInputFieldInputTheme;
}
export interface FlowbiteFileInputFieldInputTheme {
    base: string;
    colors: FlowbiteTextInputColors;
    sizes: FlowbiteTextInputSizes;
}
export interface FileInputProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
    color?: keyof FlowbiteTextInputColors;
    helperText?: ReactNode;
    sizing?: keyof FlowbiteTextInputSizes;
    theme?: DeepPartial<FlowbiteFileInputTheme>;
}
export declare const FileInput: import("react").ForwardRefExoticComponent<FileInputProps & import("react").RefAttributes<HTMLInputElement>>;
