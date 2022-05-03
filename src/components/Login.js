import React, {Component} from 'react';

 
class Login extends Component {
    constructor(props) { 
        super(props); 
        this.state = {
            username: "",
            login_data: null,
        };
    }

    loadLoginInfo() {
        fetch('http://judah.cedarville.edu/~hingst/getLogin.php')
        .then(response => response.json())
        .then(data => this.setState({login_data: data})
        );
    }

    handleSubmit(event){
        event.preventDefault();
        var pw = document.getElementById("password");
        //var username = document.getElementById("username");
        var userArray = this.state['login_data'].users;
        for(var i=0; i < userArray.length; i++) {
            var user = userArray.at(i);
            var fetchedUsername = user.username;
            var fetchedPW = user.password;
            if (this.state['username'] == fetchedUsername) {
                //alert("username match");
                if (pw.value == fetchedPW) {
                    //alert("password match");
                    this.props.setLoggedIn(true);
                    var sessionName = this.state['username'];
                    this.props.setUsername(sessionName);
                    break;
                }
            }
        }        
    }

    componentDidMount() {
        this.loadLoginInfo();
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
