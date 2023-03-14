import { FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import MainHeader from "./header";
import Timer from "./timer";
import { AppContext } from "../../context/store";


const Main:FC<PropsWithChildren> = ():JSX.Element => {

    const state = useContext(AppContext).state;
    // const dispatch = useContext(AppContext).setState;

    const[minutes, setMinutes] = useState<number>(60);
    const[seconds, setSeconds] = useState<number>(0);


    const headerClickHandler = (mode:string) => {
       
            setMinutes(state.timer.minutes);
            setSeconds(state.timer.seconds);
    }

    useEffect(()=>{
        console.log('aha')
    }, [state])

    

    return(
    <div className={`h-[calc(100vh-70px)] 
     bg-[${state.timer.backGroundColor}]
     pt-5 `}>
        <div className="bg-[#cdd0d470] flex flex-col gap-2 w-[85%] mx-auto rounded">
            <MainHeader clickHandler = {headerClickHandler} />
            <Timer minutes={minutes} seconds={seconds} setMinutes={setMinutes} setSeconds={setSeconds}/>
        </div>
    </div>
    );
}

export default Main