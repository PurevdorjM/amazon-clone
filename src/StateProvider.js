import React, {createContext, useContext, useReducer}  from 'react';

// Мэдээллийн давхрага  бэлтгэдэг
export const StateContext = createContext();

// Манай программд орох өгөгдлийн давхарага өгөх
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Мэдээллийн давхрагаас мэдээлэл татах
export const useStateValue = () => useContext(StateContext);