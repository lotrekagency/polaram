import React, { Component } from 'react';
import SnapshotList from './SnapshotList'
import InstagramLogin from './InstagramLogin'
import Header from './Header'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>{this.props.children}</div>
      </div>
    );
  }
}