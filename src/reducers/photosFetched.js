import {
  REQUEST_PHOTOS, RECEIVE_PHOTOS
} from '../actions'

function photos(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_PHOTOS:
      return Object.assign({}, state, {
        isFetching: false,
        lastUpdated: action.receivedAt,
        photos: action.photos
      })
    default:
      return state
  }
}

export default function photosFetched(state = { }, action) {
  switch (action.type) {
    case RECEIVE_PHOTOS:
    case REQUEST_PHOTOS:
      return Object.assign({}, state, photos(state, action))
    default:
      return state
  }
}