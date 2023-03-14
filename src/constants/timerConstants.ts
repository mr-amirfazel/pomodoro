import {TimerActionTypes, TimerState} from '../@types/context/context.types';
export const timerStates: TimerState[] = [
    {
        timerMode: TimerActionTypes.FOCUS_MODE,
        minutes:0,
        seconds:6,
        backGroundColor:"#fc7f03",
        id:"1",
        isSelected:true,
    },
    {
        timerMode: TimerActionTypes.SHORT_BREAK_MODE,
        minutes:5,
        seconds:0,
        backGroundColor:"#5fdcf5",
        id:"12",
        isSelected:false,
    },
    {
        timerMode:TimerActionTypes.LONG_BREAK_MODE,
        minutes:15,
        seconds:0,
        backGroundColor:"#d25ff5",
        id:"13",
        isSelected:false,
    },
]