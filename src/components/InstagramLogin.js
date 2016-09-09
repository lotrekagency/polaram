import React, { Component } from 'react';


export default class InstagramLogin extends Component {

  componentWillMount() {
    var token = window.location.hash.substring(14)
    if(token) {
      this.props.loginCallback(token)
    }
  }

  constructor(props) {
    super(props)
    this.loginUrl = `https://api.instagram.com/oauth/authorize/?client_id=${props.clientid}&redirect_uri=${props.redirecturl}&response_type=token`
  }

  render() {
    return (
      <a href={this.loginUrl}>Login to Instagram</a>
    );
  }
}