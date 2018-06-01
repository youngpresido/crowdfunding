import React, { Component } from 'react';
import '../bootstrap.js';
import {logoutUser} from './Logout';
import { Link } from 'react-router';
import Logout from './Logout';
import './App.css';
import SignIn from "./SignIn";
import User from './User';
import Paid from './Paid';
import MiniDrawer from './Demo';
import Navs from './Nav2';
import TT from './Trans'
import {AppBar,Drawer,MenuItem,Paper} from '@material-ui/core';
// import  Drawer  from 'material-ui/Drawer';
// import MenuItem  from 'material-ui/MenuItem';
// import  Paper from 'material-ui/Paper';
import Register from './SignUp';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';

const paperStyle={
    height:'85%',
    width:'85%',
    margin:'4%',
    marginTop:'2%',
    padding:'2%',
    textAlign:'center',
    display:'inline-block',
};
class Nav extends Component {
    constructor(){
        super();
        this.state={
            token:localStorage.getItem("auth_token"),
            isLoggedIn:localStorage.getItem("isLoggedIn"),
            user:localStorage.getItem("username"),
            "open":false,
            "show":null
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.showUser=this.showUser.bind(this);
        this.showPaid=this.showPaid.bind(this);
        this.showLogin=this.showLogin.bind(this);
        this.showRegister=this.showRegister.bind(this);
    }
    handleToggle(){
         this.setState({open: !this.state.open});
    };
    showUser(){
        this.setState({show: 'user', open: false });
    };

    showPaid(){
        this.setState({show: 'paid', open: false });
    };

    showLogin(){
        this.setState({show: 'login', open: false });
    };
    showRegister(){
        this.setState({show: 'register', open: false });
    };
    
    
    
    authenticated(){return this.state.token !==null }
    render() {
        console.log(this.state.isLoggedIn);
        const check=this.authenticated();
        let content = null;

        switch(this.state.show) {
            case 'user':
                content = (<User />);
                break;

            case 'paid':
                content = (<Paid />);
                break;
            case 'login':
                content = (<SignIn />);
                break;
            case 'register':
                content = (<Register />);
                break;


            default:
                content =(<User />);
        }
        return (
            <div className="App">
            <TT />
            <AppBar
                    iconclassnameright="muidocs-icon-navigation-expand-more"
                    title="KEGOWO"
                    onLeftIconButtonClick={this.handleToggle}
                    
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestchange={(open)=>this.setState({open})}>
                    <AppBar title="Bamidele" 
                     onLeftIconButtonClick={this.handleToggle}
                    />
            
                    <MenuItem onClick={this.showUser}>Home</MenuItem>
                    <MenuItem onClick={this.showPaid}>Ongoing Programs</MenuItem>
                    <MenuItem onClick={this.showLogin}>Login</MenuItem>
                    <MenuItem onClick={this.showRegister}>Register</MenuItem>
                    <MenuItem onClick={this.showRegister}>Create Fund</MenuItem>                    
                    <MenuItem onClick={this.showRegister}>Logout</MenuItem>
                </Drawer>

                <Paper style={paperStyle} zdepth={5}>
                   
                    {content}
                    <footer className="text-center">&copy; 2018 Kegowo </footer>
            
                </Paper>
            </div>
        );
    }
}
export default Nav;