import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../actions/index';

class TaskItem extends Component{
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
        this.props.onCloseForm();
    }
    
    onUpdate = () => {
        // this.props.update(this.props.task.id);
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }
    
    render(){
        var {task, id} = this.props;
        
		return(
			<tr>
                <td className="text-center">{id + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true? 'enable' : 'disable'} onClick={this.onUpdateStatus}>
                        {task.status === true? 'Enabled': 'Disabled'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-success" onClick={this.onUpdate}>
                    <i className="fas fa-pencil-alt"></i> Edit</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                    <i className="fas fa-trash-alt"></i> Delete</button>
                </td>
            </tr>
		);
	}
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(action.updateStatus(id));
        },
        onDelete: (id) => {
            dispatch(action.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(action.closeForm());
        },
        onOpenForm: () => {
            dispatch(action.openForm());
        },
        onEditTask: (task) => {
            dispatch(action.editTask(task));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
