import { ButtonHTMLAttributes, DetailedHTMLProps, FC, useRef, useState } from "react"

const MainHeader:FC =()=>{

    // const [focusButton, setFocusButton] = useState(false);
    // const [ShortBreakButton, setShortBreakButton] = useState(false);
    // const [LongBreakButton, setLongBreakButton] = useState(false);

    const focusRef = useRef<any>();
    const shortBreakRef = useRef<any>();
    const longBreakRef = useRef<any>();

    const refs = [focusRef, shortBreakRef, longBreakRef];

    const handleClick = (ref: React.MutableRefObject<any>) => {
            refs.forEach(ref => {ref.current.style.backgroundColor = ''; ref.current.style.fontSize = ''; ref.current.style.fontWeight = '';});
            ref.current.style.backgroundColor = '#97cacf99';
            ref.current.style.fontWeight = 'bold';
    }

    return(
        <div className="flex justify-around items-center mx-auto text-xl text-stone-700 p-6">
            <button className="rounded-lg p-2 transition-all ease-in " ref={focusRef} onClick={() => {handleClick(focusRef)}}>Focus</button>
            <button className="rounded-lg p-2 transition-all ease-in " ref={shortBreakRef} onClick={()=> {handleClick(shortBreakRef)}}>Short break</button>
            <button className="rounded-lg p-2 transition-all ease-in " ref={longBreakRef} onClick={()=> {handleClick(longBreakRef)}}>Long break</button>
        </div>
    )
}

export default MainHeader