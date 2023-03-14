import { FC, PropsWithChildren } from "react";
import classes from './index.module.css';

interface SettingModalProps extends PropsWithChildren{

}


const SettingModal:FC<SettingModalProps> = () => {
    return(
    <>
    <div className={classes.backdrop}/>
        <div className={classes.modal}>
           Salaaaaam
        </div>
    </>)
}

export default SettingModal