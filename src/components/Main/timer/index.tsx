import React, {useState, useEffect, PropsWithChildren, FC} from "react";
import DigitCard from './digitCard';
import {digitArray} from "../../../utils/utils";


import Button from "../../Base/button/button";

interface TimerProps extends PropsWithChildren{
    minutes: number;
    seconds: number;
}
const Timer:FC<TimerProps> = (props) => {
    const[minutes, setMinutes] = useState(props.minutes);
    const[seconds, setSeconds] = useState(props.seconds);
    const [timerOn, setTimerOn] = useState(false);


    

    useEffect(() => {
        document.title = `${minutes}:${seconds}`;
        let id:number;
        if (timerOn) {
            id= window.setInterval(() => {
                if(seconds > 0) {
                    setSeconds(seconds => seconds-1);
               }
               else if (minutes > 0) {
                    setMinutes(minutes => minutes-1);
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
    <div className="flex gap-2 py-1  mx-auto justify-center items-center">
        <div className="flex gap-[.1rem]">
        {digitArray(minutes).map((number, index) => <DigitCard key={index} digit = {number} />)}
        </div>
        <DigitCard digit={":"} />
        <div className="flex gap-[.1rem]">
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