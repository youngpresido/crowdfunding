import Axios from "axios";
export {loginUser};
let loginUser=(email,password)=>{
    $("#login-form button")
    .attr("disabled", "disabled")
    .html(
        '<i class="fa fa-spinner fa-spin fa-1x fa-fw"><li><span class="sr-only">Loading...</span>'
    );

    var formData =new FormData();
    formData.append("email",email);
    formData.append("password",password);

    const dat={
        email:email,
        password:password
    }
    console.log(dat);
    axios
    .post("api/auth/login", dat)
    .then(response=>{
        
        return response;
    })
    .then(json=>{
        if(json.data.success){
            alert("Login Successful");

            let userData ={
                name: json.data.data.name,
                id:json.data.data.id,
                email:json.data.data.email,
                auth_token:json.data.data.auth_token,
                timestamp:new Date().toString()

            };
            // console.log(userData);
            let appState={
                isLoggedIn:true,
                user:userData
            };
            localStorage['appState']=JSON.stringify(appState);
            localStorage["username"]=JSON.stringify(userData.name);
            localStorage["userid"]=JSON.stringify(userData.id);
            localStorage["email"]=JSON.stringify(userData.email);
            localStorage["auth_token"]=JSON.stringify(userData.auth_token.original.access_token);
            localStorage["timestamp"]=JSON.stringify(userData.timestamp);
        //     // console.log(localStorage["appState"])
        //   let res=  {
        //         isLoggedIn:appState.isLoggedIn,
        //         user:appState.user
        //     };
        
        // localStorage.setItem(appState,JSON.stringify(appState));
        }else alert("Login Failed!");
        $('#login-form button')
        .removeAttr("disabled")
        .html("Login");
    })
    .catch(error=>{
        alert(`An error occured! ${error}`);
        $("#login-form button")
        .removeAttr("disabled")
        .html("Login");
    });
};