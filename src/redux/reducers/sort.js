var initalState = {
    sort:{
        by: 'name',
        value: 1
    }
}

var reducer = (state = initalState, action) => {
    if(action.type === 'SORT'){
        var {by, value} = action.sort;
        return {
            by,
            value
        };
    }
    return state;
}

export default reducer;