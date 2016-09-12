import { connect } from 'react-redux';
import React, { Component } from 'react';


export class Header extends Component {
  render() {
    var loginButton
    if (this.props.auth.isAuthenticated) {
      loginButton = <li><a href='/logout'>Logout</a></li>
    } else {
      loginButton = ''
    }
    return (
      <div>
        <header className='header'>
          <h1>Instagram downloader</h1>
          <ul>
            {loginButton}
            <li><a href='/about'>About</a></li>
          </ul>
        </header>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    auth: store.auth
  };
}

export default connect(mapStateToProps)(Header);