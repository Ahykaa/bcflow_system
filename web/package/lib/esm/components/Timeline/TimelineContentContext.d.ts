import type { FlowbiteTimelineContentTheme } from './TimelineContent';
export type TimelineContentContext = {
    theme: FlowbiteTimelineContentTheme;
};
export declare const TimelineContentContext: import("react").Context<TimelineContentContext | undefined>;
export declare function useTimelineContentContext(): TimelineContentContext;
