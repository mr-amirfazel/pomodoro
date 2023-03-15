import { FC, useState } from "react";
import { MdTimer } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import HeaderItem from "./HeaderItem";
import GlassItem from "./GlassItem";
import { Link } from "react-router-dom";
import SettingModal from "../../Modals/SettingModal";

const Header: FC = (): JSX.Element => {
  const [settingIsShown, setSettingIsShown] = useState(false);

  return (
    <header className="w-full">
      <div className="w-full flex justify-between items-center h-[70px] px-3 border-b-2 border-slate-600">
        {/* icon */}
        <Link to='/'>
          <HeaderItem>
           <MdTimer />
          <h3 className="font-bold text-md hidden md:inline-block">Pomodoro timer</h3>
          </HeaderItem>
          </Link>
        {/* header bars */}
        <div className="flex gap-3">
          <div onClick={()=>{setSettingIsShown(state => !state)}}>
          <GlassItem>
            <HeaderItem>
              <AiFillSetting />
              <h3 className="font-bold text-md hidden md:inline-block">Setting</h3>
            </HeaderItem>
          </GlassItem>
          </div>
          <GlassItem>
            <HeaderItem>
              <SiGoogleanalytics />
              <h3 className="font-bold text-md hidden md:inline-block">Reports</h3>
            </HeaderItem>
          </GlassItem>
        </div>
        {settingIsShown && <SettingModal onClose={()=>setSettingIsShown(state => !state)}/>}
      </div>
    </header>
  );
};

export default Header;
