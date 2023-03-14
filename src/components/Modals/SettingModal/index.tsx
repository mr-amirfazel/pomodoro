import { FC, MouseEventHandler, PropsWithChildren } from "react";
import classes from './index.module.css';

interface SettingModalProps extends PropsWithChildren{
    onClose:MouseEventHandler<HTMLDivElement>
}


const SettingModal:FC<SettingModalProps> = ({onClose}) => {
    return(
    <>
    <div className={classes.backdrop} onClick={onClose}/>
        <div className={classes.modal}>
           Salaaaaam
        </div>
    </>)
}

export default SettingModal