import React,{Component} from 'react';
//import {Link} from 'react-router'; <Link to=""></Link>
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index'
class PostsIndex extends Component{
    componentWillMount(){
        this.props.fetchPosts();
    }
    render(){
        return <div>
        </div>

    }
}

export default connect(null,{fetchPosts})(PostsIndex);