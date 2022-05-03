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

class Ape extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  requirements: null,
		  plan: null,
		  planCourseList: null,
		  catalog: null,
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

        // Go through entire JSON and add each course to their respective plan
        data.plan.forEach((key, value) => {
          // If this is the first time encountering this plan, set it as empty array
          if(planMaps.get(key.plan_name) == null){
            planMaps.set(key.plan_name, []);
          }
          
          // Create a new array. Apply what's already in planMaps to it, add the new course, 
          // then push back to planMaps
          var currentPlan = [];

          currentPlan.push.apply(currentPlan, planMaps.get(key.plan_name));
          currentPlan.push(key);        // If you'd like, you can specify a specific value here

          planMaps.set(key.plan_name, currentPlan);
        });

        // Set the plan as the newly built planMaps
        this.setState({plan: planMaps});
      }
    );
   //plan: this.convertPlan(data.plan), 
   fetch(requirementsURL)
     .then(response => response.json())
     .then(data => this.setState({requirements: data})
     );
     //alert(JSON.stringify(this.state));
  }
   
 
  componentDidMount() {
     this.loadNewPlan();
  }
 
  convertPlan(currPlan) {
    currPlan.years = [];
    for (var key in currPlan.courses) {
      var course = currPlan.courses[key];
      var currYear = course.year;
      if (currPlan.years[currYear] === undefined){
        currPlan.years[currYear] = [];
        currPlan.years[currYear]['year'] = currYear;
        currPlan.years[currYear]['fa'] = [];
        currPlan.years[currYear]['sp'] = [];
        currPlan.years[currYear]['su'] = [];
           
      }
      if (course.term === "Fall"){
        currPlan.years[currYear]['fa'][course.id] = course;
      }
      else if (course.term === "Spring"){
        currPlan.years[currYear]['sp'][course.id] = course;
      }
      else {
        currPlan.years[currYear]['su'][course.id] = course;
      }
    }
    return currPlan;
  }
 
  logout(){
    this.props.setLoggedIn(false)
  }


	render(){
    console.log((this.state));
	  return (
		<div className="App" id="content">
      <div id="header"> 
        <Banner/>
        {/*<BannerRight planList={this.state.planList}/> */}
      </div>
			
			<div id="middle">
        <UpperLeft/>
			  {/*<UpperLeft requirements={this.state.requirements}
        catalog={this.state.catalog} /> */}
			  <UpperRight plan={this.state.plan} catalog={this.state.catalog}/>
			</div>
      <div id="bottom">
        {<LowerLeft /> }
        <LowerRight /> 
			  {/*<LowerRight catalog={this.state.catalog} /> */}
      </div>
      <button onClick = {this.logout.bind(this)}>Log Out </button>
		</div>
	  );
	}

}
export default Ape;
