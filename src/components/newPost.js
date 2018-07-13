import React , {Component} from 'react';
import {reduxForm} from 'redux-form'
 class NewPost extends Component {
    render (){
        return(<div>
           <h3>New Post</h3>
            <div  className="d-flex justify-content-around shadow p-3 mb-5 bg-white rounded">
        <form className="w-50">
            <div className="form-group">
               <label >title</label>
               <input className="form-control" />
                </div>
               
            <div className="form-group">
               <label >categories</label>
               <input className="form-control" />
                </div>
               
            <div className="form-group">
               <label >title</label>
               <input className="form-control" />
                </div>
               
            <div className="form-group">
               <label >content</label>
               <textarea className="form-control" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div> 
            </div>)
    }
}

export default reduxForm({
form:'newPost'
},null,null)(NewPost);