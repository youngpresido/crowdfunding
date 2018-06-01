// import Axios from "axios";
// export {_registerUser};
// _registerUser=(name,email,password)=>{
//     $("#email-login-btn")
//     .attr("disabled", "disabled")
//     .html(
//         '<i class="fa fa-spinner fa-spin fa-1x fa-fw"><li><span class="sr-only">Loading...</span>'
//     );

//     var formData =new FormData();
//     formData.append("email",email);
//     formData.append("password",password);
//     formData.append("name",name);


//     axios
//     .post("/user/register", formData)
//     .then(response=>{
//         console.log(response);
//         return response;
//     })
//     .then(json=>{
//         if(json.data.success){
//             alert("Registration Successful");

//             let userData ={
//                 name: json.data.data.name,
//                 id:json.data.data.id,
//                 email:json.data.data.email,
//                 auth_token:json.data.data.auth_token,
//                 timestamp:new Date().toString()
//             };
//             let appState={
//                 isLoggedIn:true,
//                 user:userData
//             };
//             localStorage["appState"]=Json.stringify(appState);
//             this.setState({
//                 isLoggedIn:appState.isLoggedIn,
//                 user:appState.user
//             });
        
//         }else{
//                 alert("Registration Failed");
//                 $("#email-login-btn")
//                 .removeAttr("disabled")
//                 .html("Register");
//         } 
        
//     })
//     .catch(error=>{
//         alert(`An error occured! ${error}`);
//         console.log(`${formData} ${error}`);
//         $("#email-form-btn")
//         .removeAttr("disabled")
//         .html("Register");
//     });
// };

import React, {Component} from 'react';
import Nav from "./Nav";

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            
            name:"",
            email:"",
            password:"",
            verify:""
        }
        this.create=this.create.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    create(e){
        e.preventDefault();
        const funding={
            name:this.state.name,
            password:this.state.password,
            email:this.state.email
        }
        console.log(funding);
        axios.post('api/users',funding)
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
        

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        //console.log(this.state);
    }
    render(){
        return (
            <div className="text-center container">
             <div  style={{padding:"2%"}}>
                <h1>Sign Up</h1>
                <form method="post" onSubmit={this.create}> 
        
            
                            <div className="form-group">
                            
                                <label>Name: 
                                    <input type="text" name="name" onChange={this.onChange} value={this.state.name} className="form-control" />
                                    </label>
                            </div>
                    
                        
        
                            <div className="form-group">
                                <label>Email: 
                                    <input type="email" name="email" onChange={this.onChange} value={this.state.email} className="form-control" />
                                    </label>
                            </div>
        
                            <div className="form-group">
                                <label>Password: 
                                    <input type="password" name="password" onChange={this.onChange} value={this.state.password} className="form-control" />
                                </label>
                            </div>

                        
                            <div>
                                <label>Verify Password: 
                                  <input type="password" name="verify" onChange={this.onChange} value={this.state.password} className="form-control" />
                                  </label>
                            </div>
    
                       
                        <div className="form-group" style={{}}>
                        
                            <button className="btn btn-primary text-center btn-lg" style={{"padding":"0 20px 0 20px"}}> 
                            Sign Up 
                            </button>
                        </div>
        
                </form>
            </div>
            </div>


            
        )
    }
}

