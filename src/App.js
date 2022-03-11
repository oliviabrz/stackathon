import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header>Welcome to your e birthday card!</header>
      <button className='click-to-card'>
        <a href={'/card'}>Click here to open your card!</a>
      </button>
    </div>
  );
}

export default App;
