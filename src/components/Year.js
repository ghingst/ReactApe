import React, {Component} from 'react';
import Term2 from './Term2';

class Year extends Component {
	
	render (){
	  return (
		<div className="year">
			{/* <h3>{this.props.year}</h3> */}			
			<Term2 catalog={this.props.catalog} data={this.props.data.fallTerm} term="Fall" year={this.props.theYear}/>
			<Term2 catalog={this.props.catalog} data={this.props.data.springTerm} term="Spring" year={this.props.theYear}/>
			<Term2 catalog={this.props.catalog} data={this.props.data.summerTerm} term="Summer" year={this.props.theYear}/>	
		</div>
	  );
	}
}
export default Year;
