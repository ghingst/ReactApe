import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Banner from './Banner';
import UpperLeft from './UpperLeft';
import UpperRight from './UpperRight';
import LowerLeft from './LowerLeft';
import LowerRight from './LowerRight';
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
    fetch(combinedURL)
     .then(response => response.json())
     .then(data => this.setState({planCourseList: data.plan, catalog: data.catalog})
       );
   //plan: this.convertPlan(data.plan), 
   fetch(requirementsURL)
     .then(response => response.json())
     .then(data => this.setState({requirements: data})
     );
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
      <LowerRight catalog={this.state.catalog}/> 
			{/*<LowerRight catalog={this.state.catalog} /> */}
      </div>
      <button onClick = {this.logout.bind(this)}>Log Out </button>
		</div>
	  );
	}

}
export default Ape;
