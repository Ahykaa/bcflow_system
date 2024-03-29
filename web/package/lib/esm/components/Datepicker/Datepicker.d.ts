import type { FC } from 'react';
import type { DeepPartial } from '../../types';
import { type FlowbiteTextInputTheme, type TextInputProps } from '../TextInput';
import type { FlowbiteDatepickerViewsDaysTheme } from './Views/Days';
import { type FlowbiteDatepickerViewsDecadesTheme } from './Views/Decades';
import { type FlowbiteDatepickerViewsMonthsTheme } from './Views/Months';
import { type FlowbiteDatepickerViewsYearsTheme } from './Views/Years';
import { WeekStart } from './helpers';
export interface FlowbiteDatepickerTheme {
    root: {
        base: string;
        input?: FlowbiteTextInputTheme;
    };
    popup: FlowbiteDatepickerPopupTheme;
    views: {
        days: FlowbiteDatepickerViewsDaysTheme;
        months: FlowbiteDatepickerViewsMonthsTheme;
        years: FlowbiteDatepickerViewsYearsTheme;
        decades: FlowbiteDatepickerViewsDecadesTheme;
    };
}
export interface FlowbiteDatepickerPopupTheme {
    root: {
        base: string;
        inline: string;
        inner: string;
    };
    header: {
        base: string;
        title: string;
        selectors: {
            base: string;
            button: {
                base: string;
                prev: string;
                next: string;
                view: string;
            };
        };
    };
    view: {
        base: string;
    };
    footer: {
        base: string;
        button: {
            base: string;
            today: string;
            clear: string;
        };
    };
}
export interface DatepickerProps extends Omit<TextInputProps, 'theme'> {
    open?: boolean;
    inline?: boolean;
    autoHide?: boolean;
    showClearButton?: boolean;
    labelClearButton?: string;
    showTodayButton?: boolean;
    labelTodayButton?: string;
    defaultDate?: Date;
    minDate?: Date;
    maxDate?: Date;
    language?: string;
    weekStart?: WeekStart;
    theme?: DeepPartial<FlowbiteDatepickerTheme>;
    onSelectedDateChanged?: (date: Date) => void;
}
export declare const Datepicker: FC<DatepickerProps>;
