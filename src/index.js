import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider } from 'react-redux';
import {applyMiddleware,createStore} from 'redux'
import reducers from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(<Provider store = {createStoreWithMiddleware(reducers)}>
   <Router history = {browserHistory} routes={routes} /> 
</Provider>, document.getElementById('root'));
