import {FETCH_POSTS,FETCH_POST} from '../actions/index'
 const INTIAL_STATE = {all:[],curr_post:null};
export default function(state=INTIAL_STATE,action){
    switch(action.type){
  case FETCH_POST:return {...state,curr_post:action.payload.data};
  case FETCH_POSTS: return {...state,all:action.payload.data};
 
  default : return state;
    }


}