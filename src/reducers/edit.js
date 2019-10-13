import * as types from '../constances/ActionType';

var initialState = {
    id: '',
    name: '',
    status: false
};

var reducer = (state = initialState, action) => {
    switch(action.type){
        case types.EDIT_TASK:
            return action.task;        
        default: 
            return state;
    }
};

export default reducer;