import {combineReducers} from 'redux';
import tasks from './tasks';
import form from './form';
import edit from './edit';
import filter from './filter';
import search from './search';
import sort from './sort';

const reducer = combineReducers({
    tasks,
    form,
    edit,
    filter,
    search,
    sort
});

export default reducer;