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
    	<div onClick={this.onPhotoClick} className='gallery-item'>
        <img src={this.props.photo.images.low_resolution.url}/>
        <h3>{this.props.photo.caption.text}</h3>
      </div>
    );
  }
}