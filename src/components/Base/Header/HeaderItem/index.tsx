import { FC, PropsWithChildren } from "react";


const HeaderItem:FC<PropsWithChildren> = ({children}):JSX.Element => {
    return (
        <>
        <div className='cursor-pointer flex gap-2 justify-center items-center' >
                {children}
        </div>
        </>
    );
}

export default HeaderItem