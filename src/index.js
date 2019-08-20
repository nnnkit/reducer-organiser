import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store';
import './index.css';
import App from './App';
import Single from './Single';

console.log(store.getState(),'in index')

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <Route exact path="/" component={App} />
    <Route path="/:slug" component={Single} />
  </Provider>
</BrowserRouter>
, document.getElementById('root'));