import { connect } from 'react-redux';
import React, { Component } from 'react';

import {fetchPhotosIfNeeded} from '../actions'
import Snapshot from './Snapshot'


export class SnapshotList extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPhotosIfNeeded())
  }

  render() {
    return (
      <div className='gallery'>
        {
          this.props.photos.map(photo =>
            <Snapshot photo={photo}/>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    photos: store.photosFetched.photos
  };
}

export default connect(mapStateToProps)(SnapshotList);
