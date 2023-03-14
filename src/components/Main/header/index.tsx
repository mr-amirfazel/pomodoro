import {
  FC,
  useContext,
  PropsWithChildren,
  useState,
} from "react";
import { AppContext } from "../../../context/store";
import { timerStates } from "../../../constants/timerConstants";

interface MainHeaderProps extends PropsWithChildren {
  clickHandler: any;
}

const MainHeader: FC<MainHeaderProps> = ({ clickHandler }) => {
  const changeMode = useContext(AppContext).changeMode;

  const [modes, setModes] = useState(timerStates);

  const selectedButtonStyles = "bg-[#97cacf99] font-bold";

  const handleClick = (id: string, mode:string) => {
    changeMode(mode)
    clickHandler(mode)
    setModes((modes) =>
      modes.map((item) => {
        return { ...item, isSelected: false };
      })
    );
    setModes((modes) =>
      modes.map((item) => {
        return item.id == id
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false };
      })
    );

    
  };

  return (
    <div className="flex justify-around items-center mx-auto text-xl text-stone-700 p-6">
      {modes.map((item) => (
        <button
          className={`rounded-lg p-2 transition-all ease-in ${
            item.isSelected && selectedButtonStyles
          }`}
          key={item.id}
          onClick={() => {
            handleClick(item.id, item.timerMode);
          }}
        >
          {item.timerMode}
        </button>
      ))}
    </div>
  );
};

export default MainHeader;
