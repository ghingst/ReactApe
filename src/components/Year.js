import React, {Component} from 'react';
import Term2 from './Term2';

class Year extends Component {
	
	render (){
	  return (
		<div className="year">
			{/* <h3>{this.props.year}</h3> */}			
			<Term2 catalog={this.props.catalog} data={this.props.data['fa']} term="Fall" year={this.props.year}/>
			<Term2 catalog={this.props.catalog} data={this.props.data['sp']} term="Spring" year={this.props.year}/>
			<Term2 catalog={this.props.catalog} data={this.props.data['su']} term="Summer" year={this.props.year}/>	
		</div>
	  );
	}
}
export default Year;
