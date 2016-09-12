import React from 'react'
import { shallow } from 'enzyme'
import Header from '../src/components/Header'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import * as actions from '../src/actions'
import {API_ENDPOINT} from '../src/constants'

import { mount } from 'enzyme';
import { expect } from 'chai';


var MockDate = require('mockdate');


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

function setup(_store = {}) {

  const store = mockStore(_store)

  const props = {
    //addTodo: expect.createSpy(),
  }

  const enzymeWrapper = shallow(<Header {...props} store={store}/>)

  return {
    props,
    enzymeWrapper
  }

}

describe('components', () => {

  describe('Header', () => {

    it('should render Header', () => {
      const { enzymeWrapper } = setup({
        auth: {
          token: 'mockedToken',
          isAuthenticated: true
        }
      })

      expect(enzymeWrapper.shallow().find('header').hasClass('header')).equal(true)

      expect(enzymeWrapper.shallow().find('h1').text()).equal('Instagram downloader')

      const enzymeWrapperProps = enzymeWrapper.props()
      expect(enzymeWrapperProps.auth.isAuthenticated).equal(true)
    })

    it('should have only about button when user is not authenticated', () => {
      const { enzymeWrapper } = setup({
        auth: {
          token: 'mockedToken',
          isAuthenticated: false
        }
      })

      expect(enzymeWrapper.shallow().find({href : '/logout'})).to.have.length(0);

    })

    it('should have a logout button when user is authenticated', () => {
      const { enzymeWrapper } = setup({
        auth: {
          token: 'mockedToken',
          isAuthenticated: true
        }
      })

      expect(enzymeWrapper.shallow().find({href : '/logout'})).to.have.length(1);

    })

  })

})