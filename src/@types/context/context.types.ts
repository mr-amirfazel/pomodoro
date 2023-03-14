export type TimerState = {
    seconds: number,
    minutes: number,
    timerMode: string,
    backGroundColor: string,
} 

export type AppState = {
    timer: TimerState,
}

export enum TimerActionTypes {
   FOCUS_MODE= "focus_mode",
   SHORT_BREAK_MODE = "short_break_mode",
   LONG_BREAK_MODE= "long_break_mode",
   THICK_SECOND = "thick_second",
   THICK_MINUTES= "thick_minutes",
}