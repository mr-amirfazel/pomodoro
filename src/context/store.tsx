import React, { createContext, Dispatch, SetStateAction, useReducer, useState } from "react";
import { AppState, TimerActionTypes, TimerState } from "../@types/context/context.types";
import { timerStates } from "../constants/timerConstants";

const InitialState: AppState = {
    timer:{
        seconds: 0,
        minutes: 60,
        timerMode: TimerActionTypes.FOCUS_MODE,
        backGroundColor: "#49e673",
        id:"1234",
        isSelected: true,
    },
}

const AppContext = createContext<{
  state: AppState,
  // setState: any;
  changeMode: Function
}>({
  state: InitialState,
  changeMode: () => null,
});

interface AppContextProviderProps extends React.PropsWithChildren {}
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
    children,
  }): JSX.Element => {
    // const [state, dispatch] = useReducer(timerReducer, InitialState); // flux
    const changeMode = (mode: string) => {
      setState(state => {return {...state, timer:{...state.timer, timerMode: mode}}})
    }
    const [state, setState] = useState<AppState>(InitialState);
    return (
      <AppContext.Provider value={{ state, changeMode }}>
        {children}
      </AppContext.Provider>
    );
  };
  export { AppContext, AppContextProvider };