import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

const NewPostStyle ={margin:'1% 1%'};
class App extends Component {
  render() {
    return (
      <div >
          <Link to="/posts/new"><div style ={NewPostStyle} className="pull-right"><button className="btn btn-primary">New Post</button></div></Link>
      {this.props.children}
      </div>
    );
  }
}

export default App;
