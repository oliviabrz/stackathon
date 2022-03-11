import React from 'react';
import './App.css';
import aloe from './aloe.jpg';

function App() {
  return (
    <div className='App'>
      <img src={aloe} className='aloe' alt='wait until the page loads' />
      <header>Welcome to your e birthday card!</header>
      <button className='click-to-card'>
        <a href={'/card'}>Click here to open your card!</a>
      </button>
    </div>
  );
}

export default App;
