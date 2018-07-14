import React , {Component} from 'react';
import {reduxForm,Field} from 'redux-form';
//const required = value => (value  ? undefined : 'Required')
const CancelBtnStyle = {marginLeft:'1%'};

const validate=
values =>{
    const errors = {};
    if(!values.title){
      errors.title="Required"
    }
    if(!values.content){
        errors.content="Required"
      }
      if(!values.categories){
        errors.categories="Required"
      }

    return errors;
}
;

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => ( 
    <div>
      <label>{label}</label>
      <div>
        <input className={`form-control ${touched && error ? ' is-invalid':''}` } {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className=" invalid-feedback">{error}</span>) )}
      </div>
    </div>
    
  )

  const renderFieldtextArea = (
      {
        input,
        label,
        meta:{error,touched}  
      }
  ) =>{
   return(
       <div>
           <label>{label}</label>
           <textarea className={`form-control ${touched && error ? ' is-invalid':''}` } {...input} />
           {touched &&
          ((error && <span className=" invalid-feedback">{error}</span>) )}
           </div>
   )
  };
 class NewPost extends Component {


    render (){
        return(<div>
           <h3>New Post</h3>
            <div  className="d-flex justify-content-around ">
        <form className="w-50">
            <div className="form-group">
            <Field name="title"  component={renderField} label="title" />
                </div>
            <div className="form-group">
            <Field name="categories"  component={renderField} label="categories" />
                </div>
               
            <div className="form-group">
            <Field name="content"  component={renderFieldtextArea} label="content" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button style={CancelBtnStyle} className="btn btn-danger">Cancel</button>
            </form>
            </div> 
            </div>)
    }

    
}



export default reduxForm({
form:'newPost',validate
},null,null)(NewPost);