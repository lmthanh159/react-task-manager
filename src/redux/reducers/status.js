var initalState = false;

var reducer = (state = initalState, action) => {
    if(action.type === 'CHANGE_STATUS'){
        state = !state;
    }
    return state;
}

export default reducer;