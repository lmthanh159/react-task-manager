import React, {Component} from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as action from '../actions/index';

class TaskList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 // all -1, enable 1, disable 0
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        // this.props.filter(
        //     name === 'filterName'? value : this.state.filterName,
        //     name === 'filterStatus'? value : this.state.filterStatus 
        // );
        var filter = {
            name: name === 'filterName'? value : this.state.filterName,
            status: name === 'filterStatus'? value : this.state.filterStatus
        };
        this.props.onFilter(filter);
        this.setState({
            [name]: value
        });
    }
    
	render(){
        var {tasks, filter, keyWord, sortBy, sortValue} = this.props; // <=> var tasks = this.props.tasks
        var {filterName, filterStatus} = this.state;

        if(filter){
			if(filter.name){
				tasks = tasks.filter((task) => {
					return task.name.toLowerCase().indexOf(filter.name) !== -1;
				});
			}

			tasks = tasks.filter((task) => {
				if(filter.status === -1){
					return tasks;
				} else{
					return task.status === (filter.status === 1? true : false);
				}
			});
        }
        
        if(keyWord){
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
            });
        }

        if(sortBy === 'name'){
            tasks = tasks.sort((a, b) => {
                if(a.name > b.name) return sortValue;
                else if(a.name < b.name) return -sortValue;
                else return 0;
            });
        } else{
            tasks = tasks.sort((a, b) => {
                if(a.status > b.status) return -sortValue;
                else if(a.status < b.status) return sortValue;
                else return 0;
            });
        }

        var eleTask = tasks.map((task, index) => {
            return <TaskItem key={task.id} id={index} task={task}/>
        });

		return(
			<table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="text-center">Index</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Option</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" name="filterName"
                                value={filterName} onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select name="filterStatus" className="form-control"
                                value={filterStatus} onChange={this.onChange}
                            >
                                <option value={-1}>All</option>
                                <option value={1}>Enable</option>
                                <option value={0}>Disable</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {eleTask}
                </tbody>
            </table>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filter: state.filter,
        keyWord: state.search,
        sortBy: state.sort.by,
        sortValue: state.sort.value
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilter: (filter) => {
            dispatch(action.filter(filter));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
