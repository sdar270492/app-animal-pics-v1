// import data from "../data/posts.json";
// import data from "../data/potsv2.json";
import axios from "axios";

let url = 'https://three-points.herokuapp.com/api';

// export function getPosts() {
//     return new Promise((resolve, reject) => {   
//         window.setTimeout(() => {
//             resolve([...data.posts]);
//         }, 3000);
//     });
// }

export function login(username, password) {
    return axios
        .post(`${url}/login`, { username, password })
        .then((response) => response.data);
}

export function getPosts() {
    return axios
        .get(`${url}/posts`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
        })
        .then((response) => response.data);
}

export function getUserLogin(id) {
    return axios
        .get(`${url}/users/${id}`, { 
            headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
         })
        .then((response) => response.data);
}

export function addLike(id) {
    return axios
        .post(`${url}/posts/${id}/like`, { 
            headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
         });
        // .then((response) => response.data);
}