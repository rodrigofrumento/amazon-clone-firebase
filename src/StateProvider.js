import React, { createContext, useContext, useReducer } from 'react' 

//data Layer
export const StateContext = createContext();

// wrap and provide de Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider valeu={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull infos data Layer
export const useStateValue = () => useContext(StateContext);