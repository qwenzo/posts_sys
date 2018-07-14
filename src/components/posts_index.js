import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

const NewPostStyle ={margin:'1% 1%'};
const ListStyle ={margin:'1%'};
class PostsIndex extends Component{
    componentWillMount(){
       // posts =; {this.props.posts.map(this.MappingList(props))}
        this.props.fetchPosts();
        console.log(this.props.fetchPosts());
    }

    MappingList(post){
      return ( <li key={post.id} className="list-group-item list-group-item-action ">{post.title}<span className="float-right">jjj</span></li>
           
    )
    }
    render(){
        return <div>
            <Link to="/posts/new"><div style ={NewPostStyle} className="float-right"><button className="btn btn-primary">New Post</button></div></Link>
            <div style ={ListStyle} className="list-group w-50 ">
          {this.props.posts.map(this.MappingList)}
     
   </div>
        </div>

    }
}

function mapStateToProps(state){
    return{posts:state.posts.all};
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex);