import { FC, MouseEventHandler, PropsWithChildren } from "react";
import { AiFillSetting, AiOutlineClose } from "react-icons/ai";
import HeaderItem from "../../Layout/Header/HeaderItem";

interface SettingModalProps extends PropsWithChildren{
    onClose:MouseEventHandler<HTMLDivElement>
}


const SettingModal:FC<SettingModalProps> = ({onClose}) => {
    return(
    <>
    <div className='fixed top-0 left-0 w-full h-[100vh] z-10 bg-[#000000bf]' onClick={onClose}/>
        <div className='fixed top-[14vh] left-[20%] w-[60%] z-40 overflow-y-auto bg-yellow-200 rounded-t-md flex flex-col'>
        <div className="flex justify-between items-center px-4">
        <HeaderItem>
              <AiFillSetting />
              <h3 className="font-bold text-md hidden md:inline-block">Setting</h3>
        </HeaderItem>
        <span className="cursor-pointer" onClick={onClose}>
            <AiOutlineClose />  
        </span>
        </div>
        <p>aha</p>
        </div>
    </>)
}

export default SettingModal