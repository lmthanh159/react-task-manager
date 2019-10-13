import * as types from '../constances/ActionType';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    };
};

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    };
};

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    };
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    };
}
    
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    };
}

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id // id: id
    };
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id // id: id
    };
}

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task // id: id
    };
}

export const filter = (filter) => {
    return {
        type: types.FILTER,
        filter // filter: filter{name, status}
    }
}

export const search =  (keyWord) => {
    return {
        type: types.SEARCH,
        keyWord // filter: filter{name, status}
    }
}

export const sort =  (sort) => {
    return {
        type: types.SORT,
        sort // filter: filter{name, status}
    }
}