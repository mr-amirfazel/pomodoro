import { TimerActionTypes } from "../@types/context/context.types";
import { timerStates } from "../constants/timerConstants";

export const digitArray = (timeEl: number): number[] =>{

    if (timeEl === 0) return [0,0];
    if (timeEl < 10) return [0, timeEl];

    let array:number[] = [];
    while(timeEl > 0){
        array.push(Math.floor(timeEl%10));
        timeEl= Math.floor(timeEl/10);
    }
    return array.reverse();
}

export const stringBuilder = (digit:number):string =>{
    if (digit<10)
        return `0${digit}`;
    return `${digit}`;
}

export const getNextMode = (mode: string):string => {
    switch (mode){
        case TimerActionTypes.FOCUS_MODE:
            return TimerActionTypes.SHORT_BREAK_MODE;
        case TimerActionTypes.SHORT_BREAK_MODE:
            return TimerActionTypes.LONG_BREAK_MODE;
        case TimerActionTypes.LONG_BREAK_MODE:
            return TimerActionTypes.FOCUS_MODE;
        default: 
            return TimerActionTypes.FOCUS_MODE;
    }
}