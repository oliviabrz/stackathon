import React from 'react';
import './App.css';
import grow from './grow.jpg'

export class PunThree extends React.Component {
  render() {
    return (
      <div className='PunThree'>
        <p>Hopefully on your birthday you won't get all dressed up and
            have nowhere to grow!
        </p>
        <img src={grow} alt='' />
      </div>
    );
  }
}
