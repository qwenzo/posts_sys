import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import React from 'react';
import PostsIndex from './components/posts_index'
export default (
   <Route path ="/" component={App}>
    <IndexRoute component ={PostsIndex}/>
       </Route>
 )
