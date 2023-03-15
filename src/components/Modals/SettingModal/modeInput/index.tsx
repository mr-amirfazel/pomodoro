import { FC, PropsWithChildren } from "react"

interface ModeInputProps extends PropsWithChildren{
    title: string,
    value:number,
    mode: string,
    onValueChange: Function,
}
const ModeInput:FC<ModeInputProps> = ({title, value, onValueChange, mode})=>{
    return(
    <div className="flex flex-col justify-start items-start">
        <h3>{title}</h3>
        <input className="text-center bg-yellow-300" type={"number"} value={value} onChange={(e)=> {onValueChange(mode, e.target.value)}}></input>
    </div>
    )
}

export default ModeInput;