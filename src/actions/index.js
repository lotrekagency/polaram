import fetch from 'isomorphic-fetch'
import {API_ENDPOINT} from '../constants'
import { routerMiddleware, push } from 'react-router-redux'

export const REQUEST_PHOTOS = 'REQUEST_PHOTOS'
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'
export const SELECT_PHOTO = 'SELECT_PHOTO'
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const LOGOUT_USER = 'LOGOUT_USER'

function requestPhotos() {
  return {
    type: REQUEST_PHOTOS,
  }
}

function receivePhotos(json) {
  return {
    type: RECEIVE_PHOTOS,
    photos: json.data,
    receivedAt: Date.now()
  }
}

function fetchPhotos(state) {
  return dispatch => {
    dispatch(requestPhotos())
    return fetch(API_ENDPOINT + 'users/self/media/recent/?access_token=' + state.auth.token)
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
    let state = getState()
    if (shouldFetchPhotos(state)) {
      return dispatch(fetchPhotos(state))
    }
  }
}

export function selectPhoto(photo) {
  return {
    type: SELECT_PHOTO,
    photo
  }
}

/*
  USER ACTIONS
*/

export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}

function _logout() {
  localStorage.removeItem('token');
  return {
    type: LOGOUT_USER
  }
}

export function logout(redirect) {
  return (dispatch, state) => {
    dispatch(_logout());
    if (redirect) {
      dispatch(push(redirect));
    }
  }
} 

function _loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function loginUserSuccess(token, redirect) {
  return (dispatch, state) => {
    dispatch(_loginUserSuccess(token));
    if (redirect) {
      dispatch(push(redirect));
    }
  }
}
