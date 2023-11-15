/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import data from "./data";
import Loading from "./Loading";
const url = 'https://course-api.com/react-useReducer-cart-project'


const initialState = {
    cart:[],
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

    const fetchData = async() => {
        dispatch({ type: "LOADING" });
        const resp = await fetch(url);
        const data = await resp.json();
        dispatch({type: "DISPLAY", payload: data})
    }


    useEffect(() => {
    dispatch({type: "TOTAL"})
    }, [state.cart])
    
    useEffect(() => {
        fetchData()
    }, [])
    
    if (state.loading) {
        return <Loading />
    }


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