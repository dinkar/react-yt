import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';

class VideoPlayerWrapper extends Component {
  render() {
    return <VideoPlayer videoId={this.props.match.params.videoId} />;
  }
}

export default VideoPlayerWrapper;
