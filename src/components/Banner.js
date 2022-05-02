import React, {Component} from 'react';

class Banner extends Component {
	render (){
	  return(
	    <div id="header">
            <div id="header-content">
                <div id="user-info">
                    <span id="name">
                        <span className="header-bold-title">
                            Student: 
                        </span>
                        
                        
                    </span>
                    <span id="Catalog">
                        <span className="header-bold-title">
                            Catalog: 
                        </span>
                        
                        
                    </span>
                    <span id="Major">
                        <span className="header-bold-title">
                            Major: 
                        </span>
                        
                        
                    </span>
                    <span id="Minor">
                        <span className="header-bold-title">
                            Credits: 
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
                        <span>Log out</span>
                    </div>
                </div>
            </div>
        </div>
	  );
	}	
}

export default Banner;
