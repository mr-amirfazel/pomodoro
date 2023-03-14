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


// const timerReducer = (state: AppState, action: ContextAction<TimerActionTypes, any>) => {
//     switch (action.type)
//         {
//             case TimerActionTypes.FOCUS_MODE:
//             state.timer.timerMode = TimerActionTypes.FOCUS_MODE;
//             state.timer.seconds = 0
//             state.timer.minutes = 60
//             state.timer.backGroundColor = "red"
//             console.log('ns', state.timer)
//             return state
            
//             case TimerActionTypes.LONG_BREAK_MODE:
//             state.timer.timerMode = TimerActionTypes.LONG_BREAK_MODE;
//             state.timer.seconds = 0
//             state.timer.minutes = 20
//             state.timer.backGroundColor = "green"
//             console.log('ns', state.timer)
//             return state
            
//             case TimerActionTypes.SHORT_BREAK_MODE:
//             state.timer.timerMode = TimerActionTypes.SHORT_BREAK_MODE;
//             state.timer.seconds = 0
//             state.timer.minutes = 5
//             state.timer.backGroundColor = "blue"
//             console.log('ns', state.timer)
//             return state 

//             case TimerActionTypes.THICK_SECOND:
//               state.timer.seconds = action.payload;
//               return state
            
//             case TimerActionTypes.THICK_MINUTES:
//               state.timer.minutes = action.payload;
//               return state

//         }
// }



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