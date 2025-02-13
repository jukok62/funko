import axios from 'axios';
// import { URL } from './config';


function GetPop() {
    return axios.get(`http://127.0.0.1:8080/allPop` , {
        headers : {
        'Content-Type': 'application/json'
    }} )
}


export default {
    GetPop
}