import { combineReducers } from 'redux'
import photosFetched from './photosFetched'
import auth from './auth'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
  routing: routerReducer,
  photosFetched,
  auth
})

export default rootReducer
