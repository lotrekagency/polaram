/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));*/

import 'babel-polyfill'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { selectPhoto, fetchPhotosIfNeeded} from './actions'

let store = createStore(rootReducer, {}, applyMiddleware(
  thunkMiddleware,
  createLogger()
))

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(selectPhoto('photoid1'))
store.dispatch(fetchPhotosIfNeeded())

// Stop listening to state updates
unsubscribe()
