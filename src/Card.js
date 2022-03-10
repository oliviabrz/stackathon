import React from 'react';
import './App.css';
import pond from "./pond.gif"

export default class Card extends React.Component {
  playAudio() {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    audioEl.play();
  }
  render() {
    return (
      <div>
        <h1>Happy Birthday Mom!</h1>
        <img src={pond} alt='wait until the page loads'/>
        <div className='Button'>
          <button onClick={this.playAudio}>
            <span>Play Audio</span>
          </button>
          <audio>
            <source src='Happy-birthday-piano-music.mov'></source>
          </audio>
        </div>
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
