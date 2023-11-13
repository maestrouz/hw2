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
        let { total, amount } = state.cart.reduce((ctotal, citem) => {
            const { price, amount } = citem;
            const itemTotal = price * amount;
            ctotal.total += itemTotal;
            ctotal.amount += amount;
            return ctotal
        }, {
            total: 0,
            amount:0
            
        })
        return {...state, total, amount}
    }

}

export default reducer;