import {FC, useEffect, useRef, useContext, PropsWithChildren} from "react"
import { TimerActionTypes } from "../../../@types/context/context.types";
import { AppContext } from "../../../context/store";

interface MainHeaderProps extends PropsWithChildren {
    clickHandler: any;
}

const MainHeader:FC<MainHeaderProps> =({clickHandler})=>{

    const dispatch = useContext(AppContext).dispatch;
    const state = useContext(AppContext).state;

    const focusRef = useRef<any>();
    const shortBreakRef = useRef<any>();
    const longBreakRef = useRef<any>();

    const refs = [focusRef, shortBreakRef, longBreakRef];

    const handleClick = (ref: React.MutableRefObject<any>, mode:string) => {
        console.log(mode)
            refs.forEach(ref => {ref.current.style.backgroundColor = ''; ref.current.style.fontSize = ''; ref.current.style.fontWeight = '';});
            ref.current.style.backgroundColor = '#97cacf99';
            ref.current.style.fontWeight = 'bold';
            dispatch({
                type:mode
            })
            console.log('cur', state.timer);
            clickHandler(mode)
    }

    useEffect(()=>{
        focusRef.current.style.backgroundColor = '#97cacf99';
        focusRef.current.style.fontWeight = 'bold';
        
    }
    ,[])

    return(
        <div className="flex justify-around items-center mx-auto text-xl text-stone-700 p-6">
            <button className="rounded-lg p-2 transition-all ease-in " ref={focusRef} onClick={() => {handleClick(focusRef, TimerActionTypes.FOCUS_MODE)}}>Focus</button>
            <button className="rounded-lg p-2 transition-all ease-in " ref={shortBreakRef} onClick={()=> {handleClick(shortBreakRef, TimerActionTypes.SHORT_BREAK_MODE)}}>Short break</button>
            <button className="rounded-lg p-2 transition-all ease-in " ref={longBreakRef} onClick={()=> {handleClick(longBreakRef, TimerActionTypes.LONG_BREAK_MODE)}}>Long break</button>
        </div>
    )
}

export default MainHeader