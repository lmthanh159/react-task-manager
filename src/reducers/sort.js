import * as types from '../constances/ActionType';

var initialState = {
    by: 'name',
    value: 1
};

var reducer = (state = initialState, action) => {
    switch(action.type){
        case types.SORT:
            return {
                by: action.sort.by,
                value: action.sort.value
            };      
        default: 
            return state;
    }
};

export default reducer;