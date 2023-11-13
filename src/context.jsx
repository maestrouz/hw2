/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
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

    const add = (id) => {
        dispatch({type: "ADD", payload: id})
    }
    const dec = (id) => {
        dispatch({type: "DEC", payload: id})
    }

    const rem = (id) => {
        dispatch({type: "REMOVE", payload: id})
    }


    useEffect(() => {
    dispatch({type: "TOTAL"})
}, [state.cart])


    return (
        <AppContext.Provider value={{
            ...state,
            clearCart,
            add,
            dec,
            rem
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider };