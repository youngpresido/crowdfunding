// import axios from 'axios';
const BASE_URL ='http://localhost:8000';
export {getUsers,getFund};


function getUsers(){
    const url='/api/users';
    return axios.get(url).then(response=>response.data);
}