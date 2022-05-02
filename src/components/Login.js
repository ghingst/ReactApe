import React, {Component} from 'react';

 
class Login extends Component {
    constructor(props) { 
        super(props); 
        this.state = {
            username: ""
        };
    }

    handleSubmit(event){
        event.preventDefault();
        var pw = document.getElementById("password");
        if (pw.value == "password") {
            this.props.setLoggedIn(true);     
        };
        
    }

    handleNameChanged(event){
        var name = event.target.value;
        this.setState({username: name})
    }

        

render(){
        return(
            <div id="login-content">
                <div id="login-left">
                    <div id="login-above">
                        
                    </div>
                    <div id="form-box">
                        <form id="form-box-content" name="form" onSubmit={this.handleSubmit.bind(this)}>
                        <div>
                            <input type="text" id="username" name="username-input" placeholder="username" value = {this.state.username} onChange={this.handleNameChanged.bind(this)}/>
                        </div>
                        <div>
                            <input type="password" id="password" name="password-input" placeholder="password" />
                        </div>
                        <div>
                            <input type="submit" name='button' value="LOGIN"/>
                            
                        </div>
                        </form>
                    </div>
                    <div id="login-below">
                        
                    </div>
                </div>
                <div id="login-right">
                        
                </div>
            </div>


        );
    }
}
 
export default Login;
