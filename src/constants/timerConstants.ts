import {TimerActionTypes, TimerState} from '../@types/context/context.types';
export const timerStates: TimerState[] = [
    {
        timerMode: TimerActionTypes.FOCUS_MODE,
        minutes:60,
        seconds:0,
        backGroundColor:"#fc7f03",
        id:"1",
    },
    {
        timerMode: TimerActionTypes.SHORT_BREAK_MODE,
        minutes:5,
        seconds:0,
        backGroundColor:"#5fdcf5",
        id:"12",
    },
    {
        timerMode:TimerActionTypes.LONG_BREAK_MODE,
        minutes:20,
        seconds:0,
        backGroundColor:"#d25ff5",
        id:"13",
    },
]