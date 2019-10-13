import {createStore} from 'redux';
import {status, sort} from './actions/index';
import reducer from './reducers/index';


const store = createStore(reducer);
console.log('Default: ', store.getState());
store.dispatch(status());
console.log('Change status: ', store.getState());
store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('Sort: ', store.getState());