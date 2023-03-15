import { FC, MouseEventHandler, PropsWithChildren } from "react";
import classes from './index.module.css';

interface SettingModalProps extends PropsWithChildren{
    onClose:MouseEventHandler<HTMLDivElement>
}


const SettingModal:FC<SettingModalProps> = ({onClose}) => {
    return(
    <>
    <div className='fixed top-0 left-0 w-full h-[100vh] z-10 bg-[#000000bf]' onClick={onClose}/>
        <div className='fixed top-[14vh] left-[20%] w-[60%] z-40 overflow-y-auto bg-yellow-200 rounded-t-md'>
           Salaaaaam
        </div>
    </>)
}

export default SettingModal