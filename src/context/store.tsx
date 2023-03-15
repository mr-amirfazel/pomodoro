import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useReducer,
  useState,
} from "react";
import {
  AppState,
  TimerActionTypes,
  TimerState,
} from "../@types/context/context.types";
import { timerStates } from "../constants/timerConstants";
import { getNextMode } from "../utils/utils";

let InitialModeInfos = {
  focus: { minutes: timerStates[0].minutes, seconds: timerStates[0].seconds },
  short: { minutes: timerStates[1].minutes, seconds: timerStates[1].seconds },
  long: { minutes: timerStates[2].minutes, seconds: timerStates[2].seconds },
};

const InitialState: AppState = {
  timer: {
    seconds: timerStates[0].seconds,
    minutes: timerStates[0].minutes,
    timerMode: TimerActionTypes.FOCUS_MODE,
    backGroundColor: "#fc7f03",
    id: "1234",
  },
  modesInfo: InitialModeInfos
  
};

const AppContext = createContext<{
  state: AppState;
  changeMode: Function;
  nextMode: Function;
}>({
  state: InitialState,
  changeMode: () => null,
  nextMode: () => null,
});

interface AppContextProviderProps extends React.PropsWithChildren {}
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
  children,
}): JSX.Element => {
  const [state, setState] = useState<AppState>(InitialState);

 

  const [modesInfo, setModesInfo] = useState(InitialModeInfos);

  const changeMode = (mode: string) => {
    setState((state) => {
      return {
        ...state,
        timer: {
          ...state.timer,
          timerMode: mode,
          minutes:
            mode == TimerActionTypes.FOCUS_MODE
              ? modesInfo.focus.minutes
              : mode == TimerActionTypes.SHORT_BREAK_MODE
              ? modesInfo.short.minutes
              : modesInfo.long.minutes,
          seconds:
              mode == TimerActionTypes.FOCUS_MODE
                ? modesInfo.focus.seconds
                : mode == TimerActionTypes.SHORT_BREAK_MODE
                ? modesInfo.short.seconds
                : modesInfo.long.seconds,
        },
      };
    });
  };

  const nextMode = () => {
    let nextMd = getNextMode(state.timer.timerMode);
    changeMode(nextMd);
  };

  return (
    <AppContext.Provider value={{ state, changeMode, nextMode }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider };
