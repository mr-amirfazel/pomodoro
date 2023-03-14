import React, {useState, useEffect, PropsWithChildren, FC, useContext} from "react";
import DigitCard from './digitCard';
import {digitArray, stringBuilder} from "../../../utils/utils";
import { AppContext } from "../../../context/store";


import Button from "../../Base/button/button";

interface TimerProps extends PropsWithChildren{
    minutes: number;
    seconds: number;
    setMinutes:any,
    setSeconds:any,
}
const Timer:FC<TimerProps> = ({minutes, seconds, setMinutes, setSeconds}) => {

    
    const [timerOn, setTimerOn] = useState(false);


    

    useEffect(() => {
        document.title = `${stringBuilder(minutes)}:${stringBuilder(seconds)}`;
        let id:number;
        if (timerOn) {
            id= window.setInterval(() => {
                if(seconds > 0) {
                    setSeconds(seconds-1);
               }
               else if (minutes > 0) {
                    setMinutes(minutes-1);
                    setSeconds(59);
               }
               else{
                
                    setTimerOn(false);
               }
            },1000);
        }
        else{
            window.clearInterval(id!);
        }
        return () => window.clearInterval(id);
    }
    ,[minutes, seconds, timerOn]);



    const clickHandler = () =>{
       setTimerOn(prev => !prev);
    }

    return (
    <div className="flex flex-col gap-10 items-center justify-center">
    <div className="flex flex-col md:flex-row gap-2 py-1  mx-auto justify-center items-center">
        <div className="flex gap-[.1rem] ">
        {digitArray(minutes).map((number, index) => <DigitCard key={index} digit = {number} />)}
        </div>
        <div className="hidden md:block">
            <DigitCard digit={":"} />
        </div>
        <div className="flex gap-[.1rem] flex-nowrap md:flex-wrap">
        {digitArray(seconds).map((number, index) => <DigitCard key={index} digit = {number} />)}
        </div>
    </div>
        <div className="p-3 w-full">
            <Button onClick={clickHandler}>{timerOn ? `Stop` : `Start`}</Button>
        </div>
    </div>
        );
}

export default Timer;