import React, {Component} from 'react';
import Year from './Year';

class UpperRight extends Component {
	
	render (){
	  var yrs = "";
	  if (this.props.plan) {
		 yrs = this.props.plan.map((value, key) => {
		  return (
				<Year catalog={this.props.catalog} year={value.year} data={value} />
			);		
	  });
	  }
	  return (
		<div id="schedules">
				{yrs}
		</div>
	  );
	}	
}

export default UpperRight;

// //import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
// import React, {Component} from 'react';
// import Year from './Year';
// class UpperRight extends Component {
	
// 	render (){
// 	  var yrs = "";

// 	  //alert(JSON.stringify(this.props.plan));
// 	  //alert("keyname = " + this.props.keyName);
// 	  if (this.props.plan) { 
// 			//for (let [key, value] of this.props.plan){
// 				//currently set to always use first plan
// 				//var yearsArray = [];

// 				// for (var y=0; y < yearsArray.length; y++) {

// 				// }
// 				yrs = (value) => {
// 					return (
// 						<Year catalog={this.props.catalog} data = {value} theYear = {value.year}/>
// 					);
// 				}
// 				//break;
// 			//};
// 		}
	
	  
// 	  //alert("Building schedules");
// 	  return (
// 			<div id="schedules">
// 				{yrs}
// 			</div>	
// 	  );
// 	}	
// }

// export default UpperRight;

/*ORIGINAL

class UpperRight extends Component {
	
	render (){
	  var yrs = "";
	  if (this.props.plan && this.props.plan.years) {
		 yrs = this.props.plan.years.map((value, key) => {
		  return (
				<Year catalog={this.props.catalog} year={key} 
data={value} />
			);		
	  });
	  }
	  return (
		<div id="UR">
			<h3>My Plan</h3>
			<div id="plan">
				{yrs}
			</div>
		</div>
	  );
	}	
}

export default UpperRight;

*/

