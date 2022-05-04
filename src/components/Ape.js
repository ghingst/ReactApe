import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Banner from './Banner';
import UpperLeft from './UpperLeft';
import UpperRight from './UpperRight';
import LowerLeft from './LowerLeft';
import LowerRight from './LowerRight';
import { flushSync } from 'react-dom';
//import Term from './Term';

//removed term and year
class PlanCourse {
  constructor(courseDesignator, courseName) {
      this.courseDesignator = courseDesignator;
      this.courseName = courseName;
  }
}

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


class Ape extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  requirements: null,
		  plan: null,
		  planList: null,
		  catalog: null,
      planYears: null,
      totalCredits: 0,
      major: "",
      catalogYear: "",
		};
	}

  loadNewPlan(){
    var combinedURL = "http://judah.cedarville.edu/~hingst/6-getCombined.php?username=" + this.props.username;
    var requirementsURL = "http://judah.cedarville.edu/~hingst/6-getRequirements.php?username=" + this.props.username;
    //var nameParm = this.state['username'];

    // Fetch the courses to build the plans
    fetch(combinedURL)
     .then(response => response.json())
     .then(data => {
        // Create a hashmap for the plans. Key is plan name and value is array of courses for that plan
        var planMaps = new Map();
        var defaultPlanPulled = false;
        var defaultPlanName = "";
        var major = "";


        // Go through entire JSON and add each course to their respective plan
        data.plan.forEach((key, value) => {
          // If this is the first time encountering this plan, set it as empty array
          if(planMaps.get(key.plan_name) == null){
            planMaps.set(key.plan_name, []);
            //for the first plan object, pull the plan name as the default plan name
            if(!defaultPlanPulled) {
              defaultPlanName = key.plan_name;
              defaultPlanPulled = true;
              major = key.major;
              //alert(JSON.stringify(key.username));
              
            }

          }
          
          // Create a new array. Apply what's already in planMaps to it, add the new course, 
          // then push back to planMaps
          var currentPlan = [];
          //console.log("check what key.planName is");
          //console.log(JSON.stringify(planMaps.get(key.planName).course_id));
          currentPlan.push.apply(currentPlan, planMaps.get(key.plan_name));
          currentPlan.push(key);        // If you'd like, you can specify a specific value here
          planMaps.set(key.plan_name, currentPlan);
        });


        // Set the plan as the newly built planMaps
        this.setState({planList: planMaps, plan: (planMaps.get(defaultPlanName)), planYears: this.convertPlanToYear(planMaps.get(defaultPlanName), 
          data.catalog), catalog: data.catalog, major: major, catalogYear: data.catalog[0].year});
        //alert("logging state");
        console.log((this.state));
        
        
      }
    );
    
    // Fetch the requirements to build the accordion
    fetch(requirementsURL)
     .then(response => response.json())
     .then(data => this.setState({requirements: data})
     );
  }
   
  componentDidMount() {
     this.loadNewPlan();
  }

  convertPlanToYear(courseArray, catalog) {
    var yearArray = [];
    var totalCredits = 0;
    //alert(courseArray.length);
    //zero out credit counts
    // for (var i = 0; i < yearArray.length; i++) {
    //     yearArray[i].fallTerm.credits = 0;
    //     yearArray[i].springTerm.credits = 0;
    //     yearArray[i].summerTerm.credits = 0;
    // }

    //iterate through planCourses, adding to yearArray
    for (var i=0; i < courseArray.length; i++) {
      //alert("reading plan Course in convert function");
      //check if year has been initialized
      var yearInitialized = false;
      //set offset to one if term is not fall
      var offset = 0;
      if(!(courseArray[i].term == "Fall")) {
        var offset = 1;
      }
      //yrIndex variable avoids excessive looping through the yearArray
      var yrIndex = 0;
      for(yrIndex=0; yrIndex < yearArray.length; yrIndex++) {
        //compare years
        if(yearArray[yrIndex].year == (courseArray[i].year-offset)) {
          yearInitialized = true;
          break;
        }
      }
      //initialize year if necessary
      if (!yearInitialized) {
        yearArray[yrIndex] = new PlanYear(courseArray[i].year-offset);
      }

      if (courseArray[i].term == "Fall") {
        //instead of looping, we can use yrIndex instead of j
          //not sure what the purpose of this was, removed for now
          //if (courseArray[i].courseYear == parseInt(catalog.year) + j) {
        //changed to check that course's catalog year is correct
        if (courseArray[i].catalog_year == catalog[0].year) {
              //search catalog for course_id match
              for (var j =0; j < catalog.length; j++) {
                if(courseArray[i].course_id == catalog[j].course_id) {
                    //on match found, create planCourse in term and update term credits
                    yearArray[yrIndex].fallTerm.courses.push(new PlanCourse(courseArray[i].course_id, catalog[j].name));
                    yearArray[yrIndex].fallTerm.credits += parseInt(catalog[j].credits);
                    totalCredits += parseInt(catalog[j].credits);
                    break;
                }
              }
          //}
        }
        
      }
      else if (courseArray[i].term == "Spring") {
        if (courseArray[i].catalog_year == catalog[0].year) {
          //search catalog for course_id match
          for (var j =0; j < catalog.length; j++) {
            if(courseArray[i].course_id == catalog[j].course_id) {
                //on match found, create planCourse in term and update term credits
                yearArray[yrIndex].springTerm.courses.push(new PlanCourse(courseArray[i].course_id, catalog[j].name));
                yearArray[yrIndex].springTerm.credits += parseInt(catalog[j].credits);
                totalCredits += parseInt(catalog[j].credits);
                break;
            }
          }
      
         }
      }
      else if (courseArray[i].term == "Summer") {
        if (courseArray[i].catalog_year == catalog[0].year) {
          //search catalog for course_id match
          for (var j =0; j < catalog.length; j++) {
            if(courseArray[i].course_id == catalog[j].course_id) {
                //on match found, create planCourse in term and update term credits
                yearArray[yrIndex].summerTerm.courses.push(new PlanCourse(courseArray[i].course_id, catalog[j].name));
                yearArray[yrIndex].summerTerm.credits += parseInt(catalog[j].credits);
                totalCredits += parseInt(catalog[j].credits);
                break;
            }
          }
      
         }
      }

    }

   
        // //alert(courseArray[i].courseTerm);
        // if (courseArray[i].courseTerm == "Fall") {
        //     //alert("Fall");
        //     for(var j = 0; j < yearArray.length; j++){
        //         if (courseArray[i].courseYear == parseInt(catalog.year) + j) {
        //             yearArray[j].fallTerm.courses.push(courseArray[i]);
        //             for (var k = 0; k < catalog.courses.length; k++) {
        //                 if (courseArray[i].courseDesignator == catalog.courses[k].id) {
        //                     yearArray[j].fallTerm.credits += parseInt(catalog.courses[k].credits);
        //                     break;
        //                 }
        //             }
        //         }
        //     }
        // }
     
    this.setState({totalCredits: totalCredits});
    return yearArray;
  }
 
  // convertPlan(currPlan) {
  //   currPlan.years = [];
  //   for (var key in currPlan.courses) {
  //     var course = currPlan.courses[key];
  //     var currYear = course.year;
  //     if (currPlan.years[currYear] === undefined){
  //       currPlan.years[currYear] = [];
  //       currPlan.years[currYear]['year'] = currYear;
  //       currPlan.years[currYear]['fa'] = [];
  //       currPlan.years[currYear]['sp'] = [];
  //       currPlan.years[currYear]['su'] = [];
           
  //     }
  //     if (course.term === "Fall"){
  //       currPlan.years[currYear]['fa'][course.id] = course;
  //     }
  //     else if (course.term === "Spring"){
  //       currPlan.years[currYear]['sp'][course.id] = course;
  //     }
  //     else {
  //       currPlan.years[currYear]['su'][course.id] = course;
  //     }
  //   }
  //   return currPlan;
  // }
 
  logout(){
    this.props.setLoggedIn(false)
  }

	render(){
    //console.log((this.state));
    //alert("rendering and logging");
    console.log((this.state.plan));
    console.log(this.state.planYears);
    var keyName = "";
    var courseArray;
    var desiredIndex = 0;    
    
	  return (
		<div className="App" id="content">
      <div id="header"> 
        <Banner logout = {this.logout.bind(this)} major = {this.state.major} catalogYear = {this.state.catalogYear} totalCredits = {this.state.totalCredits} fullName = {this.props.fullName} />
        {/*<BannerRight planList={this.state.planList}/> */}
      </div>
			
			<div id="middle">
        <UpperLeft requirements={this.state.requirements} />
			  {/*<UpperLeft requirements={this.state.requirements}
        catalog={this.state.catalog} /> */}
			  <UpperRight plan={this.state.planYears} catalog={this.state.catalog}/>
			</div>
      <div id="bottom">
      {<LowerLeft /> }
      <LowerRight catalog={this.state.catalog}/> 
			{/*<LowerRight catalog={this.state.catalog} /> */}
      </div>
      {/* <button onClick = {this.logout.bind(this)}>Log Out </button> */}
		</div>
	  );
	}

}
export default Ape;

// render(){
//   return (
//   <div className="App" id="main">
//     <Banner/>
//     {/*<BannerRight planList={this.state.planList}/> */}
//     {/*<UpperLeft requirements={this.state.requirements}
// catalog={this.state.catalog} /> */}
//     <UpperRight plan={this.state.plan} catalog={this.state.catalog}/>
//     {/*<LowerLeft /> */}
//     {/*<LowerRight catalog={this.state.catalog} /> */}
//   </div>
//   );
// }

