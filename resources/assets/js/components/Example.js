import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import  { Router, Route, browserHistory,Link } from  'react-router';
import User from './User';
import { loginUser } from './Login';
import SignIn from './SignIn';
import Register from './SignUp';
import Fund from './Fund';
import Crowd from './Crowd';
import Paid from './Paid';
import Nav from './Nav';
import Navs from './Nav2';
import TT from './Trans';
import { Switch, BrowserRouter as Router, Route,  Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Example extends Component {
    render() {
        return (
            <Router>
             <MuiThemeProvider> 
             <TT /> 
            
            
            </MuiThemeProvider>
            </Router>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
