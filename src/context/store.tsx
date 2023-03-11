import React, { createContext, useReducer, useState } from "react";
import { TimerActionTypes, TimerState } from "../@types/context/context.types";

const InitialState: TimerState = {
    timer:{
        seconds: 40,
        minutes: 40,
        timerMode: "FOCOUS",
        backGroundColor: "",
    },
}

const AppContext = createContext<{
  state: TimerState,
  dispatch: React.Dispatch<ContextAction<any, any>>;
}>({
  state: InitialState,
  dispatch: () => null,
});

type ContextAction<T, K> = {
    type: T;
    payload?: K;
  };

const timerReducer = (state: TimerState, action: ContextAction<TimerActionTypes, any>) => {
    switch (action.type)
        {
            case TimerActionTypes.FOCUS_MODE:
            state.timer.timerMode = TimerActionTypes.FOCUS_MODE;
            state.timer.seconds = 60
            state.timer.minutes = 60
            return state
            
            case TimerActionTypes.LONG_BREAK_MODE:
            state.timer.timerMode = TimerActionTypes.LONG_BREAK_MODE;
            state.timer.seconds = 0
            state.timer.minutes = 20
            return state
            
            case TimerActionTypes.SHORT_BREAK_MODE:
            state.timer.timerMode = TimerActionTypes.SHORT_BREAK_MODE;
            state.timer.seconds = 0
            state.timer.minutes = 5
            return state
        }
}

interface AppContextProviderProps extends React.PropsWithChildren {}
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
    children,
  }): JSX.Element => {
    const [state, dispatch] = useReducer(timerReducer, InitialState); // flux
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
  };
  export { AppContext, AppContextProvider };