import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import expect from 'expect'

import * as actions from '../src/actions'
import {API_ENDPOINT} from '../src/constants'

var MockDate = require('mockdate');


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Async actions', () => {
  afterEach(() => {
    nock.cleanAll()
    MockDate.reset()
  })

  it('creates RECEIVE_PHOTOS when fetching photos has been done', () => {

    const mockResponse = {
      "photos" : [
        {
          "id" : "1",
          "url" : "instagram.com/asd.png"
        },
        {
          "id" : "2",
          "url" : "instagram.com/qwe.png"
        }
      ]
    }

    const mockedDate = 1434319925275

    const expectedActions = [
      { type: actions.REQUEST_PHOTOS },
      { type: actions.RECEIVE_PHOTOS, receivedAt: mockedDate, photos : mockResponse.photos }
    ]

    nock(API_ENDPOINT)
      .get('/server/photos.json')
      .reply(200, mockResponse)

    MockDate.set(mockedDate)

    const store = mockStore({})

    return store.dispatch(actions.fetchPhotosIfNeeded())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
