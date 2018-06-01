import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Nav from './Nav';

import {connect} from 'react-redux';
import {Link } from 'react-router';
import { loginUser } from './Login';
import { Redirect } from 'react-router-dom';
import {
    reducer as formReducer,
    reduxForm,
    Field
} from "redux-form";


// const form=reduxForm({
//     form:'login'
// });
export default class SignIn extends React.Component{

    constructor(props){
        super(props);
        const {history}=this.props;
        this.state={
            
           
            email:"",
            password:"",
            token:'',
            appState:{
                isLoggedIn:false,
                user:{
                    auth_token:null
                }
                }
        }
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
//login user
   handleFormSubmit(e){
    e.preventDefault();
    const funding={

        email:this.state.email,
        password:this.state.password,
        
    }
    //response from login form
    loginUser(this.state.email,this.state.password);
    
   let userss={ 
    name:localStorage.getItem("username") , 
    email:localStorage.getItem("email"),
   auth_token:localStorage.getItem("auth_token"),
   timestamp:localStorage.getItem("timestamp"),
   id:localStorage.getItem("userid")
    }
   
    let alldata={
       isLoggedIn:true,  
       user:userss
        }
        this.setState();
    this.setState({appState:alldata})


    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        //console.log(this.state);
    }
    authenticated(){
        
        return this.state.appState.user.auth_token!==null 
        
        
        }
    render(){
        
        const check=this.authenticated();
    return (
    <div>
         <div id="main">
        { check ? <p> SSeun</p>: 
            <div className="text-center container">
            <div  style={{padding:"2%"}}>
             <form className="form-signin" id="login-form" onSubmit={this.handleFormSubmit} method="post">
             
             <div style={{width:'50%',marginLeft:"30%"}}>
                <h1 className="h3 mb-3 font-weight-normal" style={{textTransform:"capitalize"}}>Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input value={this.state.email} onChange={this.onChange}  name="email" type="email" id="email-input" className="form-control" placeholder="Email address" required />
                        <br /><br />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input value={this.state.password} onChange={this.onChange} type="password" id="password-input" className="form-control" name="password" placeholder="Password" required />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/>Remember me
                    </label> 
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    
                 <p className="mt-5 mb-3 text-muted">&copy; Kegowo 2017-2018</p>  
               
            </div>
           </form>
        </div>
        </div>
   

            }
        </div>
    </div>
    
    );
}
}
        





// import React, {Component} from "react";
// import ReactDOM from 'react-dom';
// import Nav from './Nav';
// import {connect} from 'react-redux';
// import {Link } from 'react-router';
// import { loginUser } from './Login';

// import {
//     reducer as formReducer,
//     reduxForm,
//     Field
// } from "redux-form";
// const validateSignInform=(values)=>{
//     const result=validate(values,{
//         email:{
//             presence:{
//                 message: '^Please enter your email address'
//             },
//             email:{
//                 message:'^Please enter a valid email address'
//             }
//         },
//         password:{
//             presence:{
//                 message:'^Please enter your password'
//         }
//     }
// });
// return result;
        
// };
// export default class  SignIn  extends Component {
//     constructor(props){
//         super(props);
//         this.processSubmit=this.processSubmit.bind(this);
//     }
//     componentWillMount(){

//     }   
//     processSubmit(values){
//             axios.post('api/user/login',values)
//             .then(response=>{
//                 console.log(respnse.data);
//             })
//             .error((error)=>{
//                 console.log(error);
//             });
//     }
//     render(){
//         const { handleSubmit, submitting }=this.props;
//         return(
//             <div className="container mt-5">
//                 <div className="row justify-content-center">
//                     <div className="col-6">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h2>Sign Into account</h2>
//                                     <form onSubmit={handleSubmit(this.processSubmit)}>
//                                         <Field
//                                             label="Email Address"
//                                             name="email"
//                                             component={FormField}
//                                             id="email"
//                                             type="text"
//                                             className="form-control"
//                                             />
//                                             <Field label="Password" name="password" component={FormField} 
//                                             id="password"
//                                             className="form-control"
//                                             />
//                                             <div className="form-check">
//                                                 <label className="form-check-label">
//                                                     <Field
//                                                         name="remember"
//                                                         component="input"
//                                                         type="checkbox"
//                                                         className="form-check-input mt-2"
//                                                         value="1"
//                                                         />
//                                                 </label>
//                                             </div>
//                                             <div className="form-group mt-4">
//                                                 <button type="submit" className="btn btn-secondary" disabled={submitting}>
//                                                     Continue
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
        


//         );
//     }
// };
// SignIn=reduxForm({
//     form:'signin',
//     validate:validateSignInform,
// })(SignIn)



// import React, { Component } from 'react';
// import Nav from './Nav';
// import {connect} from 'react-redux';
// import {Field, reduxForm} from 'redux-form';
// import {Link } from 'react-router';
// import { loginUser } from './Login';


// const form =reduxForm({
//     form:'login'
// });
// export default class SignIn extends Component{
//     handleFormSubmit(formProps){
//         this.props.loginUser(formProps);
//     }
//     constructor(props){
//         super(props);
//         this.state={
//             email:"",
//             password:"",
//             redirect:false
//         }
//         this.login=this.login.bind(this);
//         this.onChange=this.onChange.bind(this);
//     };
//     login(){
//         if(this.state.email && this.state.password){
//         axios.post('api/user/login',this.state)
//             .then(response=>{
//                 sessionStorage.setItem("userData",response.data);
                
//                 console.log('my page');
//                 this.setState({redirect:true});
//             })
//             .error((err)=>{
//                 console.log(err);
//             });
//     }
// }
//     onChange(e){
//         this.setState({[e.target.name]: e.target.value});
//         console.log(this.state);
//     }
//     render(){

//         if(this.state.redirect){

//         }
//         return(

//         <div>
//             <Nav />
//             <br/><br/><br/><br/>
//             <div className="column">
//             <h2>Login</h2>
//             <label>Email: </label>
//             <input type="text" name="email" onChange={this.onChange}/>
//             <label>Password</label>
//             <input type="password" name="password" onChange={this.onChange}/>
//             <input type="submit" value="Login" className="btn" onClick={this.login}/>
//             </div>
//         </div>
//         );
//     }
// }
