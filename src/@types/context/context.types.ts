export type TimerState = {
    timer:{
        seconds: number,
        minutes: number,
        timerMode: string,
        backGroundColor: string,
    }
} 

export enum TimerActionTypes {
   FOCUS_MODE= "focus_mode",
   SHORT_BREAK_MODE = "short_break_mode",
   LONG_BREAK_MODE= "long_break_mode",
}