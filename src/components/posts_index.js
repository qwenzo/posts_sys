import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';


const ListStyle = {marginTop:'5%'};
class PostsIndex extends Component{
    componentWillMount(){
        this.props.fetchPosts();
    }

    MappingList(post){
      return ( <Link key={post.id} to ={`/posts/${post.id}`}><li  className="list-group-item list-group-item-action ">{post.title}<span className="float-right">{post.categories}</span></li></Link>)
    }
    render(){
        const posts = this.props.posts;
       
        return <div  className="d-flex justify-content-center">
            <div  className="list-group w-50 ">
          {posts ? posts.map(this.MappingList):'Loading...'}
     
   </div>
        </div>

    }
}

function mapStateToProps(state){
    return{posts:state.posts.all};
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex);