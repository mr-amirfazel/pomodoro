import React, { createContext, Dispatch, SetStateAction, useReducer, useState } from "react";
import { AppState, TimerActionTypes, TimerState } from "../@types/context/context.types";
import { timerStates } from "../constants/timerConstants";
import { getNextMode } from "../utils/utils";

const InitialState: AppState = {
    timer:{
        seconds: timerStates[0].seconds,
        minutes: timerStates[0].minutes,
        timerMode: TimerActionTypes.FOCUS_MODE,
        backGroundColor: "#fc7f03",
        id:"1234",
        isSelected: true,
    },
}

const AppContext = createContext<{
  state: AppState,
  changeMode: Function,
  nextMode: Function
}>({
  state: InitialState,
  changeMode: () => null,
  nextMode: ()=> null,
});

interface AppContextProviderProps extends React.PropsWithChildren {}
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
    children,
  }): JSX.Element => {


    const changeMode = (mode: string) => {
      setState(state => {return {...state, timer:{...state.timer, timerMode: mode}}})
    }

    const nextMode = () => {
      let nextMd = getNextMode(state.timer.timerMode);
      changeMode(nextMd);
    }
    const [state, setState] = useState<AppState>(InitialState);
    return (
      <AppContext.Provider value={{ state, changeMode, nextMode }}>
        {children}
      </AppContext.Provider>
    );
  };
  export { AppContext, AppContextProvider };