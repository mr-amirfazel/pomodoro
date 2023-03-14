import {FC, useEffect, useRef, useContext, PropsWithChildren, useState} from "react"
import { TimerActionTypes } from "../../../@types/context/context.types";
import { AppContext } from "../../../context/store";
import { timerStates } from "../../../constants/timerConstants";

interface MainHeaderProps extends PropsWithChildren {
    clickHandler: any;
}

const MainHeader:FC<MainHeaderProps> =({clickHandler})=>{

    const dispatch = useContext(AppContext).dispatch;
    const state = useContext(AppContext).state;

    const [modes, setModes] = useState(timerStates.map(item => {return {...item, isSelected:false}}));

    const focusRef = useRef<any>();
    const shortBreakRef = useRef<any>();
    const longBreakRef = useRef<any>();

    const refs = [focusRef, shortBreakRef, longBreakRef];

    const selectedButtonStyles = "bg-[#97cacf99] font-bold"


    const handleClick = (id: string) => {
        // console.log(mode)
        // dispatch({
        //     type:mode
        // })
        //     refs.forEach(ref => {ref.current.style.backgroundColor = ''; ref.current.style.fontSize = ''; ref.current.style.fontWeight = '';});
        //     ref.current.style.backgroundColor = '#97cacf99';
        //     ref.current.style.fontWeight = 'bold';
        //     // console.log('cur', state.timer);
        //     clickHandler(mode)
        setModes(modes =>modes.map(item => {
            return {...item, isSelected:false};
        }))
        // console.log(modes)
        setModes(modes => modes.map(item => {
          return  item.id == id ?  {...item, isSelected:true} :  {...item, isSelected:false}
        })) 
        // console.log(modes)

    }

    // useEffect(()=>{
    //     focusRef.current.style.backgroundColor = '#97cacf99';
    //     focusRef.current.style.fontWeight = 'bold';
        
    // }
    // ,[])

    return(
        <div className="flex justify-around items-center mx-auto text-xl text-stone-700 p-6">
            {/* <button className="rounded-lg p-2 transition-all ease-in " ref={focusRef} onClick={() => {handleClick(focusRef, TimerActionTypes.FOCUS_MODE)}}>Focus</button>
            <button className="rounded-lg p-2 transition-all ease-in " ref={shortBreakRef} onClick={()=> {handleClick(shortBreakRef, TimerActionTypes.SHORT_BREAK_MODE)}}>Short break</button>
            <button className="rounded-lg p-2 transition-all ease-in " ref={longBreakRef} onClick={()=> {handleClick(longBreakRef, TimerActionTypes.LONG_BREAK_MODE)}}>Long break</button> */}
            {modes.map(item => <button className={`rounded-lg p-2 transition-all ease-in ${item.isSelected && selectedButtonStyles}`} key={item.id} onClick={()=>{handleClick(item.id)}}>{item.timerMode}</button>)}
        </div>
    )
}

export default MainHeader