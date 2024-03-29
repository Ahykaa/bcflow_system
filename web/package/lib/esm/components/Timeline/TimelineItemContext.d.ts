import type { FlowbiteTimelineItemTheme } from './TimelineItem';
export type TimelineItemContext = {
    theme: FlowbiteTimelineItemTheme;
};
export declare const TimelineItemContext: import("react").Context<TimelineItemContext | undefined>;
export declare function useTimelineItemContext(): TimelineItemContext;
