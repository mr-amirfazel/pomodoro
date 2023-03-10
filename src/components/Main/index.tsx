import { FC, PropsWithChildren } from "react";
import Timer from "./timer";

const Main:FC<PropsWithChildren> = ():JSX.Element => {
    return(
    <div className="h-[calc(100vh-70px)] w-full bg-blue-400 pt-5">
        <Timer minutes={60} seconds={60}/>
    </div>
    );
}

export default Main