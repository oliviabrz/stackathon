import React from 'react';
import './App.css';
import turnip from './turnips.jpg';
import { PunTwo } from './PunTwo';

export class Pun extends React.Component {
  state = {
    showPun2: false,
  };

  render() {
    return (
      <div className='Pun'>
        <p>Make sure to turnip the music on your special day!</p>
        <img src={turnip} alt='' />
        <button
          className='pun-two'
          onClick={() => this.setState({ showPun2: true })}
        >
          Want another pun? Click me now!
        </button>
        {this.state.showPun2 === true && (
          <PunTwo/>
        )}
      </div>
    );
  }
}
