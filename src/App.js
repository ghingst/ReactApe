import React, {Component} from 'react'; 
import './App.css'; 
import './Ape_page.css';
import './login.css';
//import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Ape from './components/Ape'; 
import Login from './components/Login'; 
 
class App extends Component {  
    constructor(props) {  
        super(props);    
        this.state = {
            isLoggedIn: false,
            username: ""
        };
        this.setLoggedIn = this.setLoggedIn.bind(this)
 
    }  
 
    setLoggedIn(tf){
        this.setState({isLoggedIn: tf});
    }

    setUsername = (name) => {
        this.setState({username: name});
    }


    render(){ 
        return ( 
            <div className="wrapper"> 
                {this.state.isLoggedIn && <Ape setLoggedIn = {this.setLoggedIn} username = {this.state['username']} />}
                {! this.state.isLoggedIn && <Login setLoggedIn = {this.setLoggedIn} username = {""} setUsername = {this.setUsername}/> }	

                {/* <BrowserRouter> 
                    <Routes> 
                        <Route path="/ape" element={<Ape />}/> 
                        <Route path="/login" element={<Login />}/> 
                    </Routes> 
                </BrowserRouter>  */}
            </div> 
        ); 
    } 
} 
 
export default App;
