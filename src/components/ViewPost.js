import React , {Component} from 'react';
import {connect} from 'react-redux';
import {getPost,deletePost} from '../actions/index'
import {Link} from 'react-router';
import PropTypes from 'prop-types';
 const PostStyle = {marginLeft:'25%', marginTop:'5%'};
 const IndexAndDelete = {marginBottom:'1%'}
class ViewPost extends Component {

    static contextTypes = {
     router:PropTypes.object
    }

   componentWillMount(){
   this.props.getPost(this.props.params.id);
   }

   onClickDelete(){
       this.props.deletePost(this.props.params.id).then(
       ()=> this.props.router.push("/"));
   }

    render(){
        const post = this.props.post;
      return  <div className="w-50 mx-auto">
      <div style={IndexAndDelete}>
      <Link to="/">Back to index</Link>
      <button className="btn btn-danger float-right" onClick={this.onClickDelete.bind(this)}> Delete Post</button>
      </div>
    <div className="shadow p-3 mb-5 bg-white rounded-top">
        <h1>{!post ? " ":post.title}</h1>
        <h3>{!post ? "Loading...":post.categories}</h3>
    </div>
    <div className="shadow p-3 mb-5 bg-white rounded-bottom">{!post ? "Loading...":post.content}</div>
      </div>
    }

  
}

function   mapStateToProps(state){
    return {post:state.posts.curr_post}
}

export default connect(mapStateToProps,{getPost,deletePost})(ViewPost);