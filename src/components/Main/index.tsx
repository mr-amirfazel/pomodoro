import { FC, PropsWithChildren } from "react";
import MainHeader from "./header";
import Timer from "./timer";

const Main:FC<PropsWithChildren> = ():JSX.Element => {
    return(
    <div className="h-[calc(100vh-70px)]  bg-blue-400 pt-5">
        <div className="bg-[#cdd0d470] flex flex-col gap-2 w-[85%] mx-auto rounded">
            <MainHeader />
            <Timer minutes={60} seconds={60}/>
        </div>
    </div>
    );
}

export default Main