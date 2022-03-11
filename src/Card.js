import React from 'react';
import './App.css';
//import pond from "./pond.gif";
import sunflower from './sunflower.png';
import './Happy-birthday-piano-music.mov';
//import { ReactComponent as MyLogo } from './happy-birthday.svg'
import song from './Happy-birthday-piano-music.mp3';

export default class Card extends React.Component {
  state = {
    audio: new Audio(song),
    isPlaying: false,
  };
  playPause = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div>
        <header>Happy Birthday Mom!</header>
     
          <button className='audio-button' onClick={this.playPause}>
            Play Audio
          </button>
     
        {/* <MyLogo/> */}
        <img src={sunflower} className='sunflower' alt='wait until the page loads' />
        {/* <button className='pun-one'>Click me!</button> */}
      </div>
    );
  }
}

// export default class Card extends React.Component {
//   componentDidMount() {
//     const audioEl = document.getElementsByClassName("audio-element")[0]
//     audioEl.play()
//   }

//   render() {
//     return (
//       <div>
//           <div className='Card'></div>
//         <audio className="audio-element">
//           <source src="Happy-birthday-piano-music.mov"></source>
//         </audio>
//       </div>
//     )
//   }
// }
