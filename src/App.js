import React from 'react';
import './App.css';
import Board from './components/board';

const App = () => {

  return (
    <div className="App">
      <div className="App-header">
        <h1> Tic-Tac-Toe Playgorund </h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
