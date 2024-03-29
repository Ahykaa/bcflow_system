import type { ComponentProps, FC } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteRatingStarTheme, FlowbiteStarSizes } from './RatingStar';
export interface FlowbiteRatingTheme {
    root: {
        base: string;
    };
    star: FlowbiteRatingStarTheme;
}
export interface RatingProps extends ComponentProps<'div'> {
    size?: keyof FlowbiteStarSizes;
    theme?: DeepPartial<FlowbiteRatingTheme>;
}
export declare const Rating: FC<RatingProps> & {
    Star: FC<import("./RatingStar").RatingStarProps>;
    Advanced: FC<import("./RatingAdvanced").RatingAdvancedProps>;
};
