import React, { Component } from 'react';

export default class Snapshot extends Component {
  render() {
    return (
      <h2>{this.props.photo.id}</h2>
    );
  }
}