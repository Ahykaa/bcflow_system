import type { FlowbiteTimelineTheme } from './Timeline';
export type TimelineContext = {
    theme: FlowbiteTimelineTheme;
    horizontal?: boolean;
};
export declare const TimelineContext: import("react").Context<TimelineContext | undefined>;
export declare function useTimelineContext(): TimelineContext;
