import { connect } from 'react-redux';
import React, { Component } from 'react';
import {logout} from '../actions'


export default class Logout extends Component {

  componentWillMount() {
  	const { dispatch } = this.props
  	dispatch(logout('/login'))
  }

  render() {
    return false
  }

}

export default connect()(Logout);
