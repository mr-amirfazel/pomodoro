import { FC, PropsWithChildren, useContext, useEffect, useRef, useState } from "react";
import MainHeader from "./header";
import Timer from "./timer";
import { AppContext } from "../../context/store";
import { timerStates } from "../../constants/timerConstants";
import { TimerState } from "../../@types/context/context.types";
import SettingModal from "../Modals/SettingModal";


const Main:FC<PropsWithChildren> = ():JSX.Element => {

    const state = useContext(AppContext).state;

    const[minutes, setMinutes] = useState<number>(timerStates[0].minutes);
    const[seconds, setSeconds] = useState<number>(timerStates[0].seconds);
    const [bgColor, setBgColor] = useState("#fc7f03");

    const [settingIsShown, setSettingIsShown] = useState(true);



    const headerClickHandler = (mode:string) => {

        let timerState: TimerState;

            
        timerState = timerStates.filter(item => item.timerMode === mode)[0]
        
        console.log(timerState.minutes, timerState.seconds)
        setMinutes(timerState.minutes);
        setSeconds(timerState.seconds);
        
        setBgColor(timerState.backGroundColor)
    }

    useEffect(()=>{
        let timerState: TimerState;
        timerState = timerStates.filter(item => item.timerMode === state.timer.timerMode)[0]
        setMinutes(state.timer.minutes);
        setSeconds(state.timer.seconds);
        setBgColor(timerState.backGroundColor)
    }, [state])


    return(
    <div style={{backgroundColor: bgColor}}  className={`h-[calc(100vh-70px)] 
     pt-5 transition-all ease-linear`}>
        <div className="bg-[#cdd0d470] flex flex-col gap-2 w-[85%] mx-auto rounded">
            <MainHeader clickHandler = {headerClickHandler} />
            <Timer minutes={minutes} seconds={seconds} setMinutes={setMinutes} setSeconds={setSeconds}/>
            {settingIsShown && <SettingModal onClose={()=>setSettingIsShown(state => !state)}/>}
        </div>
    </div>
    );
}

export default Main