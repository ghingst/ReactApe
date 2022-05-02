import React, {Component} from 'react';
import Term2 from './Term2';

class Year extends Component {
	
	render (){
	  return (
		<div class="year">
			<h3>{this.props.year}</h3>
			<div class="yearContent">
				<Term2 catalog={this.props.catalog} data={this.props.data['fa']} term="Fall" />
				<Term2 catalog={this.props.catalog} data={this.props.data['sp']} term="Spring" />
				<Term2 catalog={this.props.catalog} data={this.props.data['su']} term="Summer" />
			</div>
		</div>
	  );
	}
}
export default Year;
