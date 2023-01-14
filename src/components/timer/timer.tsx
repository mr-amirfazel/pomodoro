import React, {useState, useEffect} from "react";

const Timer = () => {
    const[minutes, setMinutes] = useState(60);
    const[seconds, setSeconds] = useState(50);
    const[intervalId, setIntervalId] = useState(0);
    const [timerOn, setTimerOn] = useState(false);



    useEffect(() => {
        document.title = `${string_builder(minutes)}:${string_builder(seconds)}`;
        if (timerOn) {
            let id: number = window.setInterval(() => {
                if(seconds > 0) {
                    setSeconds(seconds => seconds-1);
               }
               else if (minutes > 0) {
                    setMinutes(minutes => minutes-1);
                    setSeconds(59);
               }
               else{
                    console.log('clear interval');
                    window.clearInterval(intervalId);
                    setIntervalId(0);
               }
            },100);
            setIntervalId(id);
        }
        else{
            window.clearInterval(intervalId);
        }
        return window.clearInterval(intervalId);
    }
    ,[minutes, seconds, timerOn]);



    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) =>{
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
    <button onClick={clickHandler}>{timerOn ? `stop` : `start`}</button>
    </>
        );
}

export default Timer;