import React, {Component} from 'react';
import Year from './Year';

//function defining year object
class PlanYear {
    constructor(year) {
        this.year = year;
        this.fallTerm = new PlanTerm();
        this.springTerm = new PlanTerm();
        this.summerTerm = new PlanTerm();
    }
}

//function defining Term objects
class PlanTerm {
    constructor() {
        this.courses = [];
        this.credits = 0;
    }
}

class PlanCourse {
    constructor(courseTerm, courseYear, courseDesignator) {
        this.courseTerm = courseTerm;
        this.courseYear = courseYear;
        this.courseDesignator = courseDesignator;
    }
}

class UpperRight extends Component {
	
	convertPlanToYear(courseArray, yearArray, catalog) {
		//alert(courseArray.length);
		//zero out credit counts
		for (var i = 0; i < yearArray.length; i++) {
			yearArray[i].fallTerm.credits = 0;
			yearArray[i].springTerm.credits = 0;
			yearArray[i].summerTerm.credits = 0;
		}
	
		for (var i = 0; i < courseArray.length; i++) {
			//alert(courseArray[i].courseTerm);
			if (courseArray[i].courseTerm == "Fall") {
				//alert("Fall");
				for(var j = 0; j < yearArray.length; j++){
					if (courseArray[i].courseYear == parseInt(catalog.year) + j) {
						yearArray[j].fallTerm.courses.push(courseArray[i]);
						for (var k = 0; k < catalog.courses.length; k++) {
							if (courseArray[i].courseDesignator == catalog.courses[k].id) {
								yearArray[j].fallTerm.credits += parseInt(catalog.courses[k].credits);
								break;
							}
						}
					}
				}
			}
			else if (courseArray[i].courseTerm == "Spring") {
				//alert("Spring");
				for(var j = 0; j < yearArray.length; j++){
					if (courseArray[i].courseYear == parseInt(catalog.year) + j) {
						yearArray[j].springTerm.courses.push(courseArray[i]);
						for (var k = 0; k < catalog.courses.length; k++) {
							if (courseArray[i].courseDesignator == catalog.courses[k].id) {
								yearArray[j].springTerm.credits += parseInt(catalog.courses[k].credits);
								break;
							}
						}
					}
				}
			}
			else if (courseArray[i].courseTerm == "Summer") {
				//alert("Summer");
				for(var j = 0; j < yearArray.length; j++){
					if (courseArray[i].courseYear == parseInt(catalog.year) + j) {
						yearArray[j].summerTerm.courses.push(courseArray[i]);
						for (var k = 0; k < catalog.courses.length; k++) {
							if (courseArray[i].courseDesignator == catalog.courses[k].id) {
								yearArray[j].summerTerm.credits += parseInt(catalog.courses[k].credits);
								break;
							}
						}
					}
				}
			}
		}
	}

	render (){
	  var yrs = "";
	  //alert(JSON.stringify(this.props.plan));
		//alert("keyname = " + this.props.keyName);
	  if (this.props.plan) { 
			for (let [key, value] of this.props.plan){
				//currently set to always use first plan
				var yearsArray = [];
				alert(key);
				alert(JSON.stringify(value));
				alert("Building year");
				this.convertPlanToYear(value, yearsArray, this.props.catalog);
				for (var y=0; y < yearsArray.length; y++) {
					
				}
				yrs = (value) => {
					return (
						<Year catalog={this.props.catalog} courses ={value} />
					);
				}
				break
			};
		}
	
		//  yrs = this.props.plan.years.map((value, key) => {
		// 	return (
		// 		<Year catalog={this.props.catalog} year={key} data={value} />
		// 	);		
	  	// });
	  
	  //alert("Building schedules");
	  return (
			<div id="schedules">
				{yrs}
			</div>	
	  );
	}	
}

export default UpperRight;
