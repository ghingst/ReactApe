import React, {Component} from 'react';
import Year from './Year';

class UpperRight extends Component {
	
	render (){
	  var yrs = "";
	  //alert(JSON.stringify(this.props.plan));
	  if (this.props.plan && this.props.plan.years) { 
		alert("Building year");
		 yrs = this.props.plan.years.map((value, key) => {
			return (
				<Year catalog={this.props.catalog} year={key} data={value} />
			);		
	  	});
	  }
	  //alert("Building schedules");
	  return (
			<div id="schedules">
				{yrs}
			</div>	
	  );
	}	
}

export default UpperRight;
