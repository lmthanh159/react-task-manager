import * as types from '../constances/ActionType';

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var genarateID = () => {
    return s4() + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + s4();
}

var searchIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
}

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data? data : [];

var reducer = (state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:{
            let task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            }
            if(!task.id){
                task.id = genarateID();
                state.push(task);
            } else{
                let index = searchIndex(state, task.id);
                state[index] = task;                
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        }
        case types.UPDATE_STATUS:{
            let id = action.id;
            let index = searchIndex(state, id);
            if(index !== -1){
                // state[index].status = !state[index].status; ko update được view
                // var cloneTask = {...state[index]};
                // cloneTask.status = !cloneTask.status;
                // state[index] = cloneTask;
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
                localStorage.setItem('tasks', JSON.stringify(state)); 
            }
            return [...state];
        }
        case types.DELETE_TASK:{
            let id = action.id;
            let index = searchIndex(state, id);
            if(index !== -1){
                state.splice(index, 1);
			    localStorage.setItem('tasks', JSON.stringify(state));
		    }
            return [...state];
        }
        default: 
            return state;
    }
};

export default reducer;