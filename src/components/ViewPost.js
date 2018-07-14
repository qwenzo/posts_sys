import React , {Component} from 'react';

class ViewPost extends Component {

    render(){
      return  <div>test+{this.props.params.id}</div>
    }
}

export default ViewPost;