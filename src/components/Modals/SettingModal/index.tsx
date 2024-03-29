import { FC, MouseEventHandler, PropsWithChildren, useContext } from "react";
import { AiFillSetting, AiOutlineClose } from "react-icons/ai";
import { TfiTimer } from "react-icons/tfi";
import {FaCheck} from 'react-icons/fa';
import HeaderItem from "../../Layout/Header/HeaderItem";
import { AppContext } from "../../../context/store";
import ModeInput from "./modeInput";

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
      <div className="fixed top-[14vh] left-[5%] w-[90%] md:w-[60%] md:left-[20%]  z-40 overflow-y-auto bg-yellow-200 rounded-t-md flex flex-col gap-5 p-2">
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
        <div className="flex flex-col p-4 text-slate-600 font-bold ">
          <span className="flex gap-3 justify-start items-center">
            <TfiTimer />
            <h3>Timer (minutes)</h3>
          </span>
          <span className="flex flex-col md:flex-row items-center justify-evenly gap-2">
            <ModeInput
              value={state.modesInfo.focus.minutes}
              title={"focus"}
              mode={"focus"}
              onValueChange={changeModeValue}
            />
            <ModeInput
              value={state.modesInfo.short.minutes}
              title={"Short break"}
              mode={"short"}
              onValueChange={changeModeValue}
            />
            <ModeInput
              value={state.modesInfo.long.minutes}
              title={"Long Break"}
              mode={"long"}
              onValueChange={changeModeValue}
            />
          </span>
        </div>
        <span className="flex cursor-pointer self-end items-center justify-around font-mono gap-1 bg-teal-800 text-yellow-100 p-3 rounded-md" onClick={onClose}>
          <h4>DONE</h4>
          <FaCheck />
        </span>
      </div>
    </>
  );
};

export default SettingModal;
