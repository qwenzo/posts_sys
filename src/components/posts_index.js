import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';


const ListStyle = {marginTop:'5%'};
class PostsIndex extends Component{
    componentWillMount(){
       // posts =; {this.props.posts.map(this.MappingList(props))}
        this.props.fetchPosts();
        console.log(this.props.fetchPosts());
    }

    MappingList(post){
      return ( <Link key={post.id} to ={`/posts/${post.id}`}><li  className="list-group-item list-group-item-action ">{post.title}<span className="float-right">jjj</span></li></Link>)
    }
    render(){
        const posts = this.props.posts;
       
        return <div  className="d-flex mx-auto">
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