import React, { Component } from 'react';

let playerInstance;

class VideoPlayer extends Component {
  onPlayerReady() {
  }
  onPlayerStateChange() {
  }
  componentDidMount() {
    if(!playerInstance) {
      playerInstance = new Promise((resolve) => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      })
    }

    playerInstance.then((YT) => {
      this.player = new YT.Player(this.youtubePlayerAnchor, {
        height: this.props.height || 390,
        width: this.props.width || 640,
        videoId: this.props.match.params.videoId,
        host: 'https://www.youtube.com',
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      })
    })
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
