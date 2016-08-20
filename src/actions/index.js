import fetch from 'isomorphic-fetch'

export const REQUEST_PHOTOS = 'REQUEST_PHOTOS'
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'
export const SELECT_PHOTO = 'SELECT_PHOTO'

function requestPhotos() {
  return {
    type: REQUEST_PHOTOS,
  }
}

function receivePhotos(json) {
  return {
    type: RECEIVE_PHOTOS,
    photos: json.photos,
    receivedAt: Date.now()
  }
}

function fetchPhotos() {
  return dispatch => {
    dispatch(requestPhotos())
    return fetch('/server/photos.json')
      .then(response => response.json())
      .then(json => dispatch(receivePhotos(json)))
  }
}

function shouldFetchPhotos(state) {
  if (!state.photos) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchPhotosIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPhotos(getState())) {
      return dispatch(fetchPhotos())
    }
  }
}

export function selectPhoto(photo) {
  return {
    type: SELECT_PHOTO,
    photo
  }
}
