import ReactDom from 'react-dom'
import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import {getUsers} from './Users-api';

export default class Paid extends React.Component {
    
    
    
    constructor(){
        super();
        this.state={
            data:[]
        }
    
     console.log(super())
    }
   componentWillMount(){
    const url='/api/program';
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
            <div>
            <h2> Users Listing</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="text-danger">Id</th>
                                <th>Id</th>
                                <th>Funded Programme</th>
                                <th>Name of funder</th>
                                <th>Amount</th>
                                <th>Email of Funder</th>
                            </tr>
                        </thead>
                        <tbody>
                       {alluser.map(user=>(
                           <tr>
                               <td>{user.id}</td>
                               
    
                               <td>{user.name}</td>
                               <td>{user.fund_name}</td>
                               <td>{user.amount}</td>
                               <td>{user.email}</td>
                               <td>
                                   <a href="" className="btn btn-primary">Edit</a>||
                                   <a href="" className="btn btn-danger">Delete</a>
                               </td>
                            </tr>
                       ))}
                        
                          
                        </tbody>
                        </table>
         </div>
        )
    }
}
