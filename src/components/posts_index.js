import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

const NewPostStyle ={margin:'1% 1%'};


class PostsIndex extends Component{
    componentWillMount(){
        this.props.fetchPosts();
    }
    render(){
        return <div>
            <Link to="/posts/new"><div style ={NewPostStyle} className="float-right"><button className="btn btn-primary">New Post</button></div></Link>
        </div>

    }
}

export default connect(null,{fetchPosts})(PostsIndex);