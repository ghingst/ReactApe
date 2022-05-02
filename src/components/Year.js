import React, {Component} from 'react';
import Term2 from './Term2';

class Year extends Component {
	
	render (){
	  return (
		<div className="year">
			{/* <h3>{this.props.year}</h3> */}
			<div className="semester">
				<span className="period" ondragover='dragover(event)' ondrop='drop(event, this)'>
					<div class ="period-header">
						<span className="period-header-semester">Fall</span>
						<span className="period-header-credits"></span>
					</div>
					
				</span>
				<Term2 catalog={this.props.catalog} data={this.props.data['fa']} term="Fall" />
			</div>
			<div className="semester">
				<span className="period" ondragover='dragover(event)' ondrop='drop(event, this)'>
					<div class ="period-header">
						<span className="period-header-semester">Fall</span>
						<span className="period-header-credits"></span>
					</div>
					
				</span>
				<Term2 catalog={this.props.catalog} data={this.props.data['sp']} term="Spring" />			</div>
			<div className="semester">
				<span className="period" ondragover='dragover(event)' ondrop='drop(event, this)'>
					<div class ="period-header">
						<span className="period-header-semester">Fall</span>
						<span className="period-header-credits"></span>
					</div>
					
				</span>
				<Term2 catalog={this.props.catalog} data={this.props.data['su']} term="Summer" />
			</div>
				
		</div>
	  );
	}
}
export default Year;
