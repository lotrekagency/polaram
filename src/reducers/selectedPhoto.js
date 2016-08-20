import {
  SELECT_PHOTO
} from '../actions'

export default function selectedPhoto(state = '1', action) {
  switch (action.type) {
  case SELECT_PHOTO:
    return action.photo
  default:
    return state
  }
}