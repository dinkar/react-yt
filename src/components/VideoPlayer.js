import React, { Component } from 'react';
import { getYouTubePlayerInstance } from '../services/video';

class VideoPlayer extends Component {
  onPlayerReady() {
  }
  onPlayerStateChange() {
  }
  componentDidMount() {
    getYouTubePlayerInstance(this.youtubePlayerAnchor, {
      videoId: this.props.videoId,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange
      }
    });
  }
  render() {
    return (
      <div>
        <div ref={(r) => { this.youtubePlayerAnchor = r; }}></div>
      </div>
    );
  }
}

export default VideoPlayer;
