const reducer = (state, action) => {
    if (action.type === "CLEAR") {
        return {
            ...state, cart: []
        }
    }
    if (action.type === "ADD") {
        return {
            ...state, cart: state.amount + 1
        }
    }

}

export default reducer;