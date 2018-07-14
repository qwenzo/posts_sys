import React , {Component} from 'react';
import {connect} from 'react-redux';
import {ViewPost} from '../actions/index'
 const PostStyle = {marginLeft:'25%', marginTop:'5%'};
class ViewPost extends Component {

    render(){
      return  <div style={PostStyle} className="w-50">
<div className="shadow p-3 mb-5 bg-white rounded-top"><h3>LOLOLOLOL</h3>
</div>
<div className="shadow p-3 mb-5 bg-white rounded-bottom">lololol</div>
      </div>
    }
}

export default connect(null,{ViewPost})();