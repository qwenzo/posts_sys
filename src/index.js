import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import {Provider } from 'react-redux';
import {applyMiddleware,createStore} from 'redux'
import reducers from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<Provider store = {createStoreWithMiddleware(reducers)}>
    <App />
</Provider>, document.getElementById('root'));
