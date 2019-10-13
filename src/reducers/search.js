import * as types from '../constances/ActionType';

var initialState = '';

var reducer = (state = initialState, action) => {
    switch(action.type){
        case types.SEARCH:
            return action.keyWord;      
        default: 
            return state;
    }
};

export default reducer;