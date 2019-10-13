import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../actions/index';

class TaskForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }

    UNSAFE_componentWillMount(){
        if(this.props.task){
            var {task} = this.props;
            this.setState({
                id: task.id,
                name: task.name,
                status: task.status
            });
        } else{
            this.onClear();
        }
    }
    
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.task){
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
        } else if(!nextProps.task){
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox'? target.checked : target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
        this.onCloseForm();
    }
     
    onSubmit = (event) => {
        event.preventDefault();
        // this.props.submit(this.state);
        this.props.onAddTask(this.state);
        this.onClear();
        this.onCloseForm();
    }
    

    onCloseForm = () => {
        // this.props.closeForm();
        this.props.onCloseForm();
    }
    
	render(){
        var {id} = this.state;
        if(!this.props.isDisplayForm) return null;
		return(
			<div className="card add-task">
                <div className="card-header">
                    <span>{id !== ''? 'edit task' : 'add task'}</span>
                    <i className="fas fa-times-circle" onClick={this.onCloseForm}></i>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="name" 
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChange}
                                required
                                />
                        </div>
                        <div className="form-group">
                            <label>Status:</label>
                            <select name="status" className="form-control"
                                    value={this.state.status}
                                    onChange={this.onChange}
                            >
                                <option value={true}>Enable</option>
                                <option value={false}>Disable</option>
                            </select>
                        </div>
                        <div className="form-group form-btn">
                            <button type="submit" className="btn btn-success">
                            <i className="fas fa-plus"></i> Save </button>
                            &nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onClear}>
                            <i className="fas fa-times"></i> Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.form,
        task: state.edit
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(action.addTask(task));
        },
        onCloseForm: () => {
            dispatch(action.closeForm());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);