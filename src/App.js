import React from 'react';
import './App.css';
import Board from './Board/Board.component';

function App() {
  return (
    <div className="App">
      <Board nrows = {5} ncols = {5}/>
    </div>
  );
}

export default App;
