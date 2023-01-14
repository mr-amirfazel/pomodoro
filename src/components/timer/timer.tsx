import React, {useState, useEffect} from "react";

import Button from "../button/button";

const Timer = () => {
    const[minutes, setMinutes] = useState(6);
    const[seconds, setSeconds] = useState(50);
    const [timerOn, setTimerOn] = useState(false);



    useEffect(() => {
        document.title = `${string_builder(minutes)}:${string_builder(seconds)}`;
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
            },10);
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

    const string_builder = (time: number) =>
    {
        if (time<10)
            return `0${time}`;
        else
            return time
    }
    return (
    <>
    <p>{string_builder(minutes)} : {string_builder(seconds)}</p>
    <Button onClick={clickHandler}>{timerOn ? `Stop` : `Start`}</Button>
    </>
        );
}

export default Timer;