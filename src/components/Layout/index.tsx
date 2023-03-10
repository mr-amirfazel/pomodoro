import Header from "./Header";
import Footer  from "./Footer";
import { FC, PropsWithChildren } from "react";


const LayOut:FC<PropsWithChildren> = ({children}):JSX.Element=>{
    return (
        <>
        <Header />
            {children}
        <Footer />
        </>
    )
}

export default LayOut 