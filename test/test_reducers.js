import expect from 'expect'
import photosFetched from '../src/reducers/photosFetched'
import * as actions from '../src/actions'

describe('photosFetched reducer', () => {
  it('should return the initial state', () => {
    expect(
      photosFetched(undefined, {})
    ).toEqual({})
  })

  it('should handle photos requests', () => {

    const initialState = {
      isFetching: false,
    }

    const finalState = {
      isFetching: true,
    }

    expect(
      photosFetched(initialState, {
        type: actions.REQUEST_PHOTOS,
      })
    ).toEqual(finalState)

  })

  it('should handle photos fetched', () => {

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

    const initialState = {
      isFetching: true,
    }

    const finalState = {
      isFetching: false,
      lastUpdated: 123,
      photos: mockResponse.photos
    }

    expect(
      photosFetched(
        initialState,
        {
          type: actions.RECEIVE_PHOTOS,
          photos: mockResponse.photos,
          receivedAt: 123
        }
      )
    ).toEqual(finalState)
  })

})
