import { useState } from 'react';
import { generate } from "random-words";
import { alphabet } from './AlphabetMap';
import './App.css';

function App() {
  const [hasStartedGame, setGameState] = useState(false);
  const [currentWord, setNewWord] = useState(generate({ min: 5 }));
  return (
    <div className="App">
      {hasStartedGame ? Game() : ZeroState()}
    </div>
  );

  function ZeroState() {
    return (
      <header>
        <h1>Welcome to fingerspeller!</h1>
        <button onClick={onGameStart}>Ready to start?</button>
      </header>
    )
  }

  function onGameStart() {
    setGameState(true);
    setNewWord(generate({ minLength: 5 }));
  }

  function Game() {
    const letters = Array.from(currentWord);
    const letterNodes = letters.map(function (letter) {
      return (<img src={alphabet[letter]}></img>);
    });
    return (
      <div className="Game">
        <div className="letter-container">
          {letterNodes}
        </div>
        <button onClick={() => setNewWord(generate({ minLength: 5 }))}>New word?</button>
      </div>
    );
  }
}

export default App;
