import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import * as action from './actions/index';

class App extends Component{
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		// tasks: [],
	// 		// isDisplayForm: false,
	// 		// taskEditting: null,
	// 		// filter: {
	// 		// 	name: '',
	// 		// 	status: -1
	// 		// },
	// 		// keyWord: '',
	// 		// sortBy: 'name',
	// 		// sortValue: 1
	// 	};
	// }

	// UNSAFE_componentWillMount(){
	// 	if(localStorage && localStorage.getItem('tasks')){
	// 		var tasks = JSON.parse(localStorage.getItem('tasks'));
	// 		this.setState({
	// 			tasks: tasks
	// 		});
	// 	}
	// }

	// onGenerateData = () => {
	// 	var tasks = [
	// 		{
	// 			id: this.genarateID(),
	// 			name: 'Learn ReactJS',
	// 			status: true
	// 		},
	// 		{
	// 			id: this.genarateID(),
	// 			name: 'Learn AngularJS',
	// 			status: true
	// 		},
	// 		{
	// 			id: this.genarateID(),
	// 			name: 'Learn VueJS',
	// 			status: false
	// 		},
	// 	];

	// 	this.setState({
	// 		tasks: tasks
	// 	});

	// 	localStorage.setItem('tasks', JSON.stringify(tasks));
	// }

	// s4(){
	// 	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	// }

	// genarateID(){
	// 	return this.s4() + this.s4() + this.s4() + '-' + 
	// 		this.s4() + this.s4() + '-' + this.s4() + this.s4() + this.s4();
	// }

	onToggleForm = () => {
		// if(this.state.isDisplayForm && this.state.taskEditting !== null){
		// 	this.setState({
		// 		isDisplayForm: true,
		// 		taskEditting: null
		// 	});
		// } else{
		// 	this.setState({
		// 		isDisplayForm: !this.state.isDisplayForm,
		// 		taskEditting: null
		// 	});
		// }
		var {task} = this.props;
		if(task){
			this.props.onOpenForm();		
		} else{
			this.props.onToggleForm();
		}
		this.props.onEditTask({
			id: '',
			name: '',
			status: false
		});
	}

	// onCloseForm = () => {
	// 	// this.setState({
	// 	// 	isDisplayForm: false
	// 	// });
	// }

	// onShowForm = () => {
	// 	this.setState({
	// 		isDisplayForm: true
	// 	});
	// }

	// onSubmit = (data) => {
	// 	var {tasks} = this.state;
	// 	if(data.id === ''){
	// 		// add
	// 		data.id = this.genarateID();
	// 		tasks.push(data);
	// 	} else{
	// 		// edit
	// 		var index = this.searchIndex(data.id);
	// 		tasks[index] = data;
	// 	}
	// 	this.setState({
	// 		tasks: tasks
	// 	});
	// 	localStorage.setItem('tasks', JSON.stringify(tasks));
	// }

	// onUpdateStatus = (id) => {
	// 	var {tasks} = this.state;
	// 	var index = this.searchIndex(id);
	// 	if(index !== -1){
	// 		tasks[index].status = !tasks[index].status;
	// 		this.setState({
	// 			tasks: tasks
	// 		});
	// 		localStorage.setItem('tasks', JSON.stringify(tasks)); 
	// 	}
	// }

	// onDelete = (id) => {
	// 	var {tasks} = this.state;
	// 	var index = this.searchIndex(id);
	// 	if(index !== -1){
	// 		tasks.splice(index, 1);
	// 		this.setState({
	// 			tasks: tasks
	// 		});
	// 		localStorage.setItem('tasks', JSON.stringify(tasks));
	// 	}
	// 	this.onCloseForm();
	// }
	
	// onUpdate = (id) => {
	// 	var {tasks} = this.state;
	// 	var index = this.searchIndex(id);
	// 	if(index !== -1){
	// 		var taskEditting = tasks[index];
	// 		this.setState({
	// 			taskEditting: taskEditting
	// 		});
	// 		this.onShowForm();
	// 	}
	// }
	
	// searchIndex = (id) => {
	// 	var {tasks} = this.state;
	// 	var result = -1;
	// 	tasks.forEach((task, index) => {
	// 		if(task.id === id){
	// 			result = index;
	// 		}
	// 	});
	// 	return result;
	// }

	// onFilter = (filterName, filterStatus) => {
	// 	filterStatus = parseInt(filterStatus, 10);
	// 	this.setState({
	// 		filter: {
	// 			name: filterName.toLowerCase(),
	// 			status: filterStatus
	// 		}
	// 	});
	// }

	// onSearch = (keyWord) => {
	// 	this.setState({
	// 		keyWord: keyWord.toLowerCase()
	// 	});
	// }

	// onSort = (sortBy, sortValue) => {
	// 	this.setState({
	// 		sortBy: sortBy,
	// 		sortValue: sortValue
	// 	});
	// }
	
	render(){
		// var {sortBy, sortValue} = this.state; // <=> var tasks = this.state.tasks
		var {isDisplayForm} = this.props;
		
		// if(filter){
		// 	if(filter.name){
		// 		tasks = tasks.filter((task) => {
		// 			return task.name.toLowerCase().indexOf(filter.name) !== -1;
		// 		});
		// 	}

		// 	tasks = tasks.filter((task) => {
		// 		if(filter.status === -1){
		// 			return tasks;
		// 		} else{
		// 			return task.status === (filter.status === 1? true : false);
		// 		}
		// 	});
		// }

		// if(keyWord){
		// 	tasks = tasks.filter((task) => {
		// 		return task.name.toLowerCase().indexOf(keyWord) !== -1;
		// 	});
		// }

		// if(sortBy === 'name'){
		// 	tasks.sort((a, b) => {
		// 		if(a.name > b.name) return sortValue;
		// 		else if(a.name < b.name) return -sortValue;
		// 		else return 0;
		// 	});
		// } else{
		// 	tasks.sort((a, b) => {
		// 		if(a.status > b.status) return -sortValue;
		// 		else if(a.status < b.status) return sortValue;
		// 		else return 0;
		// 	});
		// }

		// var eleTaskForm = isDisplayForm? <TaskForm task={taskEditting}/>: ''; 
		
		return(
			<div className="container">
				<div className="title">
					<h1>task management</h1>
				</div>
				<hr/>
				<div className="row">
					<div className={isDisplayForm? 'col-sm-4 col-md-4 col-lg-4 col-xl-4': ''}>
						<TaskForm />
					</div>
					<div className={isDisplayForm? 'col-sm-8 col-md-8 col-lg-8 col-xl-8': 
										'col-sm-12 col-md-12 col-lg-12 col-xl-12'}>
						<div className="side-btn">
							<button className="btn btn-primary"
									onClick={this.onToggleForm}><i className="fas fa-plus"></i> Add Task</button>
						</div>
						{/* <div className="side-btn">
							<button className="btn btn-danger"
							onClick={this.onGenerateData}><i className="fas fa-plus"></i> Genarate Data</button>
						</div> */}
						<Control/>
						<div className="table-responsive">
							<TaskList/>
						</div>
					</div>
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
		onToggleForm: () => {
			dispatch(action.toggleForm());
		},
		onEditTask: (task) => {
            dispatch(action.editTask(task));
		},
		onOpenForm: () => {
            dispatch(action.openForm());
        }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
