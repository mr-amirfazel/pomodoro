import { FC, PropsWithChildren, useContext } from "react";
import MainHeader from "./header";
import Timer from "./timer";
import { AppContext } from "../../context/store";


const Main:FC<PropsWithChildren> = ():JSX.Element => {

    const state = useContext(AppContext).state;

    return(
    <div className="h-[calc(100vh-70px)]  bg-blue-400 pt-5">
        <div className="bg-[#cdd0d470] flex flex-col gap-2 w-[85%] mx-auto rounded">
            <MainHeader />
            <Timer minutes={state.timer.minutes} seconds={state.timer.seconds}/>
        </div>
    </div>
    );
}

export default Main