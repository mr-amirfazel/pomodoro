import { FC, MouseEventHandler, PropsWithChildren, useContext } from "react";
import { AiFillSetting, AiOutlineClose } from "react-icons/ai";
import { TfiTimer} from "react-icons/tfi";
import HeaderItem from "../../Layout/Header/HeaderItem";
import { AppContext } from "../../../context/store";

interface SettingModalProps extends PropsWithChildren {
  onClose: MouseEventHandler<HTMLDivElement>;
}

const SettingModal: FC<SettingModalProps> = ({ onClose }) => {

    const state = useContext(AppContext).state;
    const changeModeValue = useContext(AppContext).changeModeValue;


    

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-[100vh] z-10 bg-[#000000bf]"
        onClick={onClose}
      />
      <div className="fixed top-[14vh] left-[10%]  w-[80%] md:w-[60%] md:left-[20%]  z-40 overflow-y-auto bg-yellow-200 rounded-t-md flex flex-col gap-5 p-2">
        <div className="flex justify-between items-center px-4">
          <HeaderItem>
            <AiFillSetting />
            <h3 className="font-bold text-md hidden md:inline-block">
              Setting
            </h3>
          </HeaderItem>
          <span className="cursor-pointer" onClick={onClose}>
            <AiOutlineClose />
          </span>
        </div>
        <div className="flex flex-col p-4">
            <span className="flex font-bold text-slate-600 gap-3 justify-start items-center">
                <TfiTimer />
                <h3>Timer (minutes)</h3>
            </span>
            <span className="flex items-center justify-evenly">
                    <div className="flex flex-col">
                        <h3>Pomodoro</h3>
                        <input type={"number"} value={state.modesInfo.focus.minutes} onChange={(e)=> {changeModeValue("focus", e.target.value)}}></input>
                    </div>
                    <div className="flex flex-col">
                        <h3>Short Break</h3>
                        <input type={"number"} value={state.modesInfo.short.minutes} onChange={(e)=> {changeModeValue("short", e.target.value)}}></input>
                    </div>
                    <div className="flex flex-col">
                        <h3>Long Break</h3>
                        <input className="" type={"number"} value={state.modesInfo.long.minutes} onChange={(e)=> {changeModeValue("long", e.target.value)}}></input>
                    </div>
            </span>
        </div>
      </div>
    </>
  );
};

export default SettingModal;
