import React, {Component} from 'react';
import * as action from '../actions/index';
import {connect} from 'react-redux';

class Sort extends Component{
    onClick = (sortBy, sortValue) => {
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }
    
	render(){
        var {sortBy, sortValue} = this.props;

		return(
			<div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                        id="dropdownMenu1">Sort <i className="fas fa-sort"></i></button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li onClick={() => {this.onClick('name', 1)}}>
                        <a role="button" 
                        className={(sortBy === 'name' && sortValue === 1)? 
                            'dropdown-item active' : 'dropdown-item'}>
                            <i className="fas fa-sort-alpha-down"></i> 
                            &nbsp;Name A-Z
                        </a>
                    </li>
                    <li onClick={() => {this.onClick('name', -1)}}>
                        <a role="button" 
                       className={(sortBy === 'name' && sortValue === -1)? 
                            'dropdown-item active' : 'dropdown-item'}>
                            <i className="fas fa-sort-alpha-down-alt"></i> 
                            &nbsp;Name Z-A
                        </a>
                    </li>
                    <li role="separator" className="dropdown-divider"></li>
                    <li onClick={() => {this.onClick('status', 1)}}>
                        <a role="button" 
                        className={(sortBy === 'status' && sortValue === 1)? 
                            'dropdown-item active' : 'dropdown-item'}>&nbsp;Enable</a>
                    </li>
                    <li onClick={() => {this.onClick('status', -1)}}>
                        <a role="button" 
                        className={(sortBy === 'status' && sortValue === -1)? 
                            'dropdown-item active' : 'dropdown-item'}>&nbsp;Disable</a>
                    </li>
                </ul>
            </div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        sortBy: state.sort.by,
        sortValue: state.sort.value
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(action.sort(sort));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
