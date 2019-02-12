import React, { Component } from 'react';
import Tabs from './components/Tabs';
import Categories from './components/Categories';
import PictureLoader from './components/loaders/PictureLoader';
import TextLoader from './components/loaders/TextLoader';
import AudioLoader from './components/loaders/AudioLoader';
import './App.css';

import Song8bit1 from './audio/8-bit/137227__dirtyjewbs__8-bit-loop.mp3';
import Song8bit2 from './audio/8-bit/223235__dambient__8-bit-loop.mp3';
import Song8bit3 from './audio/8-bit/265308__volvion__8-bit-bossfight.mp3';
import Song8bit4 from './audio/8-bit/277363__nyan-cat__8bit-race-music.mp3';

import SongDrums1 from './audio/drums/58136__the-bizniss__ae-drum-loop-pt-1.mp3';
import SongDrums2 from './audio/drums/130579__drumhead62__live-groove-big-room-drums.mp3';
import SongDrums3 from './audio/drums/173138__godspine__chorus-drums-120.mp3';
import SongDrums4 from './audio/drums/329863__xcwm__sns-drums.mp3';

import SongParty1 from './audio/party/94590__zgump__tr-loop-0501.mp3';
import SongParty2 from './audio/party/110267__nandoo1__nandoo-messany-flying-over-the-top-epic.mp3';
import SongParty3 from './audio/party/369823__greek555__sample-128-bpm.mp3';
import SongParty4 from './audio/party/402895__edemson86__edm-loop-lead.mp3';

var songs8bit = [Song8bit1, Song8bit2, Song8bit3, Song8bit4];
var songsDrums = [SongDrums1, SongDrums2, SongDrums3, SongDrums4];
var songsParty = [SongParty1, SongParty2, SongParty3, SongParty4];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCategory: "book",
      textCategory: "haiku",
      audioCategory: "8-bit",
      audioSource: Song8bit1,
      activeTabIndex: 0,
      tabClass0: "selected",
      tabClass2: "",
      tabClass1: "",
      tabClass3: ""
    };

    this.child = React.createRef();
    this.handleClickedTab = this.handleClickedTab.bind(this);
  }

  handleClickedTab(index) {
    if(index !== this.state.activeTabIndex) {
      this.setState({activeTabIndex: index});
      this.setAudioSource();
      this.child.current.reloadPlayer();

      switch (index) {
          case 0 :
              this.setState({tabClass0: "selected", tabClass1: "", tabClass2: "", tabClass3: ""});

              break;
          case 1 :
              this.setState({tabClass0: "", tabClass1: "selected", tabClass2: "", tabClass3: ""});
              break;
          case 2 :
              this.setState({tabClass0: "", tabClass1: "", tabClass2: "selected", tabClass3: ""});
              break;
          case 3 :
              this.setState({tabClass0: "", tabClass1: "", tabClass2: "", tabClass3: "selected"});
              break;
          default :
              break;
      }
    }
  }

  imageRadioButtonChanged = event => {
      this.setState({
          imageCategory: event.currentTarget.value
      });
  };

  textRadioButtonChanged = event => {
      this.setState({
          textCategory: event.currentTarget.value
      });
  };

  setAudioSource() {

    let bitSong = songs8bit[this.state.activeTabIndex];
    let drumSong = songsDrums[this.state.activeTabIndex];
    let partySong = songsParty[this.state.activeTabIndex];

    switch(this.state.audioCategory) {
      case '8-bit' :
        this.setState({audioSource: bitSong});
        break;
      case 'drums':
        this.setState({audioSource: drumSong});
        break;
      case 'party':
        this.setState({audioSource: partySong});
        break;
      default :
        break;
    }
  }

  audioRadioButtonChanged = event => {
      this.setState({
          audioCategory: event.currentTarget.value
      });
      this.setAudioSource();
      this.child.current.reloadPlayer();
  };

  render() {
    return (
      <div id="container" className="container">
        <Tabs onClick={this.handleClickedTab} activeTabIndex={this.state.activeTabIndex} tabClass0={this.state.tabClass0} tabClass1={this.state.tabClass1} tabClass2={this.state.tabClass2} tabClass3={this.state.tabClass3}/>

        <Categories textRadioButtonChanged={this.textRadioButtonChanged}
        audioRadioButtonChanged={this.audioRadioButtonChanged}
        imageRadioButtonChanged={this.imageRadioButtonChanged} />

        <div id="content" className="content">
          <PictureLoader category={this.state.imageCategory} />
          <TextLoader category={this.state.textCategory} />
          <AudioLoader src={this.state.audioSource} ref={this.child} />
        </div>
      </div>
    );
  }
}

export default App;
