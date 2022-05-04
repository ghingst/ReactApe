import React, {Component} from 'react';

class Banner extends Component {
	render (){
	  return(
	    <div id="header">
            <div id="header-content">
                <div id="user-info">
                    <span id="name">
                        <span className="header-bold-title">
                            Student: {this.props.fullName}
                        </span>
                        
                        
                    </span>
                    <span id="Catalog">
                        <span className="header-bold-title">
                            Catalog: {this.props.catalogYear}
                        </span>
                        
                        
                    </span>
                    <span id="Major">
                        <span className="header-bold-title">
                            Major: {this.props.major}
                        </span>
                        
                        
                    </span>
                    <span id="Minor">
                        <span className="header-bold-title">
                            Credits: {this.props.totalCredits}
                        </span>
                        
                        
                    </span>
                </div>
                <div id="title-card">
                    <span id="ape-title">
                        Academic Planning
                    </span>
                </div>
                <div id="banner-buttons">
                    <div id="plans-menu">
                        <div id="dropdown-header" name="1">Plan 1</div>
                        <div id="dropdown-content">
                            <p>New plan</p>
                        </div>  
                    </div>
                    <div id="log-out-button">
                        <span><button onClick = {this.props.logout}>Log Out </button> </span>
                        {/* <span>Log out</span> */}
                    </div>
                </div>
            </div>
        </div>
	  );
	}	
}

export default Banner;
