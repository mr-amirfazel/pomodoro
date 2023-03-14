export type TimerState = {
    seconds: number,
    minutes: number,
    timerMode: string,
    backGroundColor: string,
    id: string,
} 

export type AppState = {
    timer: TimerState,
}

export enum TimerActionTypes {
   FOCUS_MODE= "Focus",
   SHORT_BREAK_MODE = "Short break",
   LONG_BREAK_MODE= "Long break",
   THICK_SECOND = "thick_second",
   THICK_MINUTES= "thick_minutes",
}