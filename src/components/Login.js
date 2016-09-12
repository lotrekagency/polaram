import { connect } from 'react-redux';
import React, { Component } from 'react';
import SnapshotList from './SnapshotList'
import InstagramLogin from './InstagramLogin'

import {loginUserSuccess} from '../actions'


export class Login extends Component {

  componentWillMount() {
    if (this.props.auth.isAuthenticated) {
      const { history } = this.props
      history.replaceState(null, '/app')
    }
  }  

  render() {
    var loginCallback = (token) => {
      const { dispatch } = this.props
      dispatch(loginUserSuccess(token, '/app'))
    }
    var redirectUri = `${location.origin}/login`
    return (
      <div>
        <InstagramLogin clientid='2ec8800df0574dfc896870bf8a36bdb0' redirecturl={redirectUri} loginCallback={loginCallback} />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    auth: store.auth
  };
}

export default connect(mapStateToProps)(Login);
