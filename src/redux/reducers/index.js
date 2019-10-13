import status from './status';
import sort from './sort';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    status,
    sort
});

export default reducer;