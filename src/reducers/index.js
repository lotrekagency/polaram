import { combineReducers } from 'redux'
import photosFetched from './photosFetched'
import selectedPhoto from './selectedPhoto'

const rootReducer = combineReducers({
  photosFetched,
  selectedPhoto
})

export default rootReducer
