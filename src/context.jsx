/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import data from "./data";


const initialState = {
    cart:data,
    loading: false,
    amount: 0,
    total: 0
}

const AppContext = createContext();


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const clearCart = () => {
        dispatch({ type: "CLEAR" });
    };

    const add = () => {
        dispatch({type: "ADD"})
    }





    return (
        <AppContext.Provider value={{
            ...state,
            clearCart,
            add
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider };