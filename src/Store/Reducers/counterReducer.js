const reducer = (state = {}, action) => {
    switch (action.type) {
        case "INCREMENT": return { ...state, count: action.data };
        case "DECREMENT": return { ...state, count: action.data };
        default: return state;
    };
};

export default reducer;