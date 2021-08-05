import React from 'react';
import Radio from './Radio';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <h1>Shrey's Pocket Radio App</h1>
      <h2>Pick a genre, choose a station, start listening</h2>
      <Radio />
    </div>
  )
}

export default App;
