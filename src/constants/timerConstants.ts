import {TimerActionTypes, TimerState} from '../@types/context/context.types';
export const timerStates: TimerState[] = [
    {
        timerMode: TimerActionTypes.FOCUS_MODE,
        minutes:60,
        seconds:0,
        backGroundColor:"blue",
        id:"1",
        isSelected:true,
    },
    {
        timerMode: TimerActionTypes.SHORT_BREAK_MODE,
        minutes:5,
        seconds:0,
        backGroundColor:"red",
        id:"12",
        isSelected:false,
    },
    {
        timerMode:TimerActionTypes.LONG_BREAK_MODE,
        minutes:15,
        seconds:0,
        backGroundColor:"green",
        id:"13",
        isSelected:false,
    },
]