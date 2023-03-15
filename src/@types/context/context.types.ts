export type TimerState = {
    seconds: number,
    minutes: number,
    timerMode: string,
    backGroundColor: string,
    id: string,
} 

export type AppState = {
    timer: TimerState,
    modesInfo: ModesInfo,
}
type ModesInfo = {
    focus: { minutes: number, seconds: number },
    short: { minutes: number, seconds: number },
    long: { minutes: number, seconds: number },
}
export enum TimerActionTypes {
   FOCUS_MODE= "Focus",
   SHORT_BREAK_MODE = "Short break",
   LONG_BREAK_MODE= "Long break",
   THICK_SECOND = "thick_second",
   THICK_MINUTES= "thick_minutes",
}