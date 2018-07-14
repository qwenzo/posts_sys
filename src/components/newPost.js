import React , {Component} from 'react';
import {reduxForm} from 'redux-form';

const CancelBtnStyle = {marginLeft:'1%'};
 class NewPost extends Component {
    render (){
        return(<div>
           <h3>New Post</h3>
            <div  className="d-flex justify-content-around ">
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
                <button type="submit" className="btn btn-primary">Submit</button>
                <button style={CancelBtnStyle} className="btn btn-danger">Cancel</button>
            </form>
            </div> 
            </div>)
    }
}

export default reduxForm({
form:'newPost'
},null,null)(NewPost);