import React , {Component} from 'react';
import {reduxForm} from 'redux-form'
 class NewPost extends Component {
    render (){
        return(<div></div>)
    }
}

export default reduxForm({
form:'newPost'
},null,null)(NewPost);