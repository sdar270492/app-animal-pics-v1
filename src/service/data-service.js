// import data from "../data/posts.json";
import data from "../data/potsv2.json";
import axios from "axios";

let url = 'https://three-points.herokuapp.com/api';

export function getPosts() {
    return new Promise((resolve, reject) => {   
        window.setTimeout(() => {
            resolve([...data.posts]);
        }, 3000);
    });
}

export function login(username, password) {
    return axios
        .post(`${url}/login`, { username, password })
        .then((response) => response.data);
}

// export function getUserLogin() {
//     return axios
//         .get(`${url}/users/6136944fcd79ba24707e2f82`, { 
//             headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
//          })
//         .then((response) => response.data);
// }