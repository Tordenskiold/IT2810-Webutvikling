import React from 'react';

class AudioLoader extends React.Component {
  reloadPlayer() {
    this.refs.audio.pause();
    this.refs.audio.load();
    this.refs.audio.play();
    }

  render() {
    return (
      <div>
        <audio ref="audio" controls autoPlay loop>
          <source src={this.props.src} type="audio/mpeg"></source>
          Your browser does not support the audio tag.
        </audio>
      </div>
    );
  }
}

export default AudioLoader;
