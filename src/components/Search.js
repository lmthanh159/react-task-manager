import React, {Component} from 'react';
import * as action from '../actions/index';
import {connect} from 'react-redux';

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            keyWord: ''
        };
    }

    onInput = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    
    onSearch = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.keyWord);
    }
    
	render(){
		return(
			<div className="search-form">
                <form onSubmit={this.onSearch}>
                    <input type="text" name="keyWord" placeholder="Enter key word..."
                        value={this.state.keyWord} onChange={this.onInput}
                    />
                    <button type="submit" className="btn btn-search"><i className="fas fa-search"></i> Search</button>
                </form>
            </div>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onSearch: (keyWord) => {
            dispatch(action.search(keyWord));
        }
	};
};

export default connect(null, mapDispatchToProps)(Search);
