import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom';

import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'


import { selectPhoto, fetchPhotosIfNeeded, loginUserSuccess } from './actions'
import App from './components/App'
import Login from './components/Login'
import Logout from './components/Logout'
import SnapshotList from './components/SnapshotList'

import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'



const logger = createLogger();

let store = compose(
  applyMiddleware(thunkMiddleware, logger, routerMiddleware(browserHistory) ),
)(createStore)(rootReducer);

const history = syncHistoryWithStore(browserHistory, store)


let token = localStorage.getItem('token');
if (token) {
  store.dispatch(loginUserSuccess(token));
}

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="app" component={SnapshotList}/>
        <Route path="login" component={Login}/>
        <Route path="logout" component={Logout}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
