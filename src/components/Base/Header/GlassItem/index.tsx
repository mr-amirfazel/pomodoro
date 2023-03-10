import { FC, PropsWithChildren } from "react";


const GlassItem:FC<PropsWithChildren> = ({children}):JSX.Element => {
    return (
        <div className='bg-slate-300 p-2 rounded-md' >
                {children}
        </div>
    );
}

export default GlassItem