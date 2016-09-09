import { combineReducers } from 'redux'
import photosFetched from './photosFetched'
import selectedPhoto from './selectedPhoto'
import auth from './auth'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
  routing: routerReducer,
  photosFetched,
  selectedPhoto,
  auth
})

export default rootReducer
