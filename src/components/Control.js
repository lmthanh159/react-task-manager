import React, {Component} from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component{
	render(){
		return(
			<div className="function-area">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Search/>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Sort/>
                    </div>
                </div>
            </div>
		);
	}
}

export default Control;
