import React from 'react';
import './App.css';
import cilantro from './cilantro.png';
import { PunThree } from './PunThree';

export class PunTwo extends React.Component {
  state = {
    showPun3: false,
  };
  render() {
    return (
      <div className='PunTwo'>
        <p>Wait...it's your birthday? Say it ain't cilantro!!</p>
        <img src={cilantro} alt='' />
        <button
          className='pun-three'
          onClick={() => this.setState({ showPun3: true })}
        >
          Ok....one more, just click me please!
        </button>
        {this.state.showPun3 === true && <PunThree />}
      </div>
    );
  }
}
