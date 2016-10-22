import React, { Component } from 'react';

export default class Snapshot extends Component {

  constructor() {
    super();
    this.onPhotoClick = this.onPhotoClick.bind(this);
  }

  onPhotoClick () {
    let imgUrl = this.props.photo.images.standard_resolution.url;
    console.log(imgUrl)
    let link = document.createElement('a');
    link.href = imgUrl;
    link.download = 'New instagram image.jpg';
    document.body.appendChild(link);
    link.click();
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
