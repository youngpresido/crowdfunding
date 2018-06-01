import React, {Component} from 'react';
import Nav from "./Nav";
import Navs from "./Nav2"
import logoutUser from "./Logout";
import { Button , Card, Row, Col }  from "react-materialize";
export default class Crowd extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            desciption:"",
            picture:"",
            video:"",
            date:"",
            amount:"",
        
            token:localStorage.getItem("auth_token"),
            user:[]
            
        }
        
        this.create=this.create.bind(this);
        this.onChange=this.onChange.bind(this);
    }
   
    create(e){
        e.preventDefault();
        const funding={
            title:this.state.title,
            desciption:this.state.desciption,
            user_id:localStorage.getItem('id'),
            date:this.state.date,
            amount:this.state.amount

        }
        console.log()
        axios.post('api/accounts',funding)
        .then((response)=>{
            console.log(response);
        });
        // console.log(this.state);

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        // console.log(this.state);
    }
    render(){
        console.log(this.state.token);
        return (
            <div className="wrapper">
                
                <div id="content">
                
                <h1 className="text-center">Create a Crowd Funding Programme</h1>
                <form method="post" onSubmit={this.create}> 
                    <div className="row">
                        <div  className="col-md-6">
                            <div className="form-group">
                                <label>Name of programme </label>
                                    <input type="text" name="title" onChange={this.onChange} value={this.state.title} className="form-control" />
                                
                            </div>
                        </div>
                        <div  className="col-md-6">
                            <div className="form-group">
                                <label>Details </label>
                                    <textarea type="text" name="desciption" style={{overflowY:"scroll"}} onChange={this.onChange} value={this.state.desciption} className="form-control" rows="10" cols="8"></textarea>
                                 
                            </div>
                        </div>
                        <div  className="col-md-6">
                            <div className="form-group">
                                <label>Videos </label>
                                    <input type="file" name="video" onChange={this.onChange} value={this.state.video} className="form-control" />
                                
                            </div>
                        </div>
                        <div  className="col-md-6">
                            <div className="form-group">
                                <label>Pictures </label>
                                    <input type="file" name="pictures" onChange={this.onChange} value={this.state.picture} className="form-control" />
                                
                            </div>
                        </div>
                        <div  className="col-md-6">
                            <div className="form-group">
                                <label>Date</label>
                                    <input type="date" name="date" onChange={this.onChange} value={this.state.date} className="form-control" />
                                
                            </div>
                        </div>
                        <div  className="col-md-6">
                            <div className="form-group">
                                <label>Amount </label>
                                    <input type="Number" name="amount" onChange={this.onChange} value={this.state.amount} className="form-control" />
                                
                            </div>
                        </div>
                        
                        <div style={{paddingLeft:"47%"}}>
                            <button className="btn btn-lg btn-primary" > Create </button>
                        </div>
                        </div>
                    
                </form>
            </div>
            </div>
        )
    }
}