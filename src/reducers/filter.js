import * as types from '../constances/ActionType';

var initialState = {
    name: '',
    status: -1
};

var reducer = (state = initialState, action) => {
    switch(action.type){
        case types.FILTER:
            action.filter.status = parseInt(action.filter.status, 10);
            return action.filter;        
        default: 
            return state;
    }
};

export default reducer;