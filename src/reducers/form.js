import * as types from '../constances/ActionType';

var initialState = false; // close form

var reducer = (state = initialState, action) => {
    switch(action.type){
        case types.TOGGLE_FORM:
            return !state;
        case types.OPEN_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;
        default: 
            return state;
    }
};

export default reducer;