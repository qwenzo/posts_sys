import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS';
const BASE_URL = "http://reduxblog.herokuapp.com/api/posts";
const API_KEY = "?key=hjvhgjjhgjghjh78`";

export  function fetchPosts(){

    const URL = BASE_URL+API_KEY;
   const req = axios.get(URL);

    return{
        type:FETCH_POSTS,
        payload:req
    }
    

}