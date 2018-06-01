import React from "react";

export default class Home extends React.Component{

    constructor(props){
        super(props);


    this.state={
            token:JSON.parse(localStorage['appState']).user.auth_token,
            users:[]
    };
}
    componentDidMount(){
        axios
        .get(`/api/users/list?token=${this.state.token}`)
        .then(response=>{
            console.log(response);
            return response;
        })
        .then(json=>{
            if(json.data.success){
                this.setState({ users: json.data.data });
            }else alert("Login Failed!");
        })
        .catch(error=>{
            alert(`An Error Occured! ${error}`);
        });
    }

    render(){
        return(
            <div>
                <h2>Welcome Home {"\u2728"}</h2>
                <p>List of all users on the system</p>
                <ul>{this.state.users.map(user=>
                <ol style={{padding:15, border:'1px solid #ccc'}}>
                    <p>Name:{user.name}</p>
                    <p>Email:{user.email}</p>
                </ol>)}
                </ul>
                <button onClick={this.props.logoutUser}>
                Logout{" "}
                </button>
            </div>
       
        
        );
    }

}