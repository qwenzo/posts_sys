import React , {Component} from 'react';
import {connect} from 'react-redux';
import {getPost} from '../actions/index'
import {Link} from 'react-router';
 const PostStyle = {marginLeft:'25%', marginTop:'5%'};
class ViewPost extends Component {


   componentWillMount(){
   this.props.getPost(this.props.params.id);
   }


    render(){
        const post = this.props.post;
        if(!post){
            return <div>Loading...</div>
        }
      return  <div style={PostStyle} className="w-50">
      <Link to="/">Back to index</Link>
<div className="shadow p-3 mb-5 bg-white rounded-top">
<h1>{post.title}</h1>
<h3>{post.categories}</h3>
</div>
<div className="shadow p-3 mb-5 bg-white rounded-bottom">{post.content}</div>
      </div>
    }

  
}

function   mapStateToProps(state){
    return {post:state.posts.curr_post}
}

export default connect(mapStateToProps,{getPost})(ViewPost);