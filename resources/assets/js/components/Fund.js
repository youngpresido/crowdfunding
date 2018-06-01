import ReactDom from 'react-dom'
import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Navs from './Nav2';
import {getUsers} from './Users-api';

export default class Fund extends React.Component {
    
    
    
    constructor(){
        super();
        this.state={
            data:[]
        }
    
     console.log(super())
    }
   componentWillMount(){
    const url='/api/accounts';
    axios.get(url)
     .then(response=>{
         this.setState({
             data:response.data
         });
       
     }).catch(errors=>{
        console.log(errors);
     })

   
 }


   
    
    
    
   render() {
        let alluser=this.state.data;
        console.log(alluser)
        // console.log(this.getAllUsers())       
        return (
            <div className="wrapper">
                <div id="content">
            <a href="">Create new crowd fund</a>
            <h2> Fund Listing</h2>
            <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Program Name</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                       {alluser.map(user=>(
                           <tr>
                               <td>{user.id}</td>
                               <td>{user.user_id}</td>
                               <td>{user.title}</td>
                               <td>{user.desciption}</td>
                               <td>
                                   <a href="" className="btn btn-primary">Edit</a>||
                                   <a href="" className="btn btn-danger">Delete</a>
                               </td>
                            </tr>
                       ))}
                        
                          
                        </tbody>
                        </table>
         </div>
         </div>
         </div>
        )
    }
}
