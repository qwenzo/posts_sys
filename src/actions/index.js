import axios from 'axios'
export const FETCH_POST ='FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
const BASE_URL = "http://reduxblog.herokuapp.com/api/posts";
const API_KEY = "?key=hjvhgjjhgjghjh78";

export  function fetchPosts(){

    const URL = BASE_URL+API_KEY;
   const req = axios.get(URL);

    return{
        type:FETCH_POSTS,
        payload:req
    }
    

}

export function createPost(props){
    const URL = BASE_URL+API_KEY;
    const req = axios.post(URL,props);

    return{
        type:CREATE_POST,
        payload:req
    }
}


export function getPost(id){
    const URL = BASE_URL+API_KEY+`/${id}`;
    const req = axios.get(URL);

    return{
        type:FETCH_POST,
        payload:req
    }
}