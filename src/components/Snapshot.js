import React, { Component } from 'react';

export default class Snapshot extends Component {

  constructor() {
    super();
    this.onPhotoClick = this.onPhotoClick.bind(this);
  }

  onPhotoClick () {
    console.log(this.props.photo.images.standard_resolution.url)
  }

  render() {
    return (
      <div className='grid-item'>
        <div onClick={this.onPhotoClick} className='gallery-item'>
          <div className='img-container'><img src={this.props.photo.images.thumbnail.url}/></div>
          <div className='label-container'>{this.props.photo.caption.text}</div>
        </div>
      </div>
    );
  }
}
