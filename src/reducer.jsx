const reducer = (state, action) => {
    if (action.type === "CLEAR") {
        return {
            ...state, cart: []
        }
    }
    if (action.type === "ADD") {
        let tcart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return {...item, amount: item.amount + 1}
            }
            return item
        })

        return {...state, cart: tcart}
    }
    if (action.type === "DEC") {
        let tcart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return {...item, amount: item.amount - 1}
            }
            return item
        })

        return {...state, cart: tcart}
    }
    if (action.type === "REMOVE") {
        let filtredItem = state.cart.filter((item) => item.id !== action.payload);
        return {...state, cart: filtredItem}
    }
    if (action.type === "TOTAL") {
        
    }

}

export default reducer;