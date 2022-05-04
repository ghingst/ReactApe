import React, {Component} from 'react';
import Term2 from './Term2';

class Year extends Component {
	
	render (){
	  return (
		<div className="year">
			{/* <h3>{this.props.year}</h3> */}			
			<Term2 catalog={this.props.catalog} data={this.props.data.fallTerm.courses} credits={this.props.data.fallTerm.credits} term="Fall" year={this.props.year}/>
			<Term2 catalog={this.props.catalog} data={this.props.data.springTerm.courses} credits={this.props.data.springTerm.credits} term="Spring" year={(this.props.year) + 1}/>
			<Term2 catalog={this.props.catalog} data={this.props.data.summerTerm.courses} credits={this.props.data.summerTerm.credits} term="Summer" year={this.props.year + 1}/>	
		</div>
	  );
	}
}
export default Year;

// import React, {Component} from 'react';
// import Term from './Term';

// class Year extends Component {
	
// 	render (){
// 	  return (
// 		<div class="year">
// 			<h3>{this.props.year}</h3>
// 			<div class="yearContent">
// 				<Term2 catalog={this.props.catalog} data={this.props.data['fa']} term="Fall" />
// 				<Term2 catalog={this.props.catalog} data={this.props.data['sp']} term="Spring" />
// 				<Term2 catalog={this.props.catalog} data={this.props.data['su']} term="Summer" />
// 			</div>
// 		</div>
// 	  );
// 	}
// }
// export default Year;

