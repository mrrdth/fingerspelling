import { useEffect, useState } from 'react';
import { Guess, Word } from 'components/game/Game';
import './App.css';
import { Controls } from 'components/game/Controls';

import { generate } from "random-words";

type GameState = 'ZERO' | 'RUNNING' | 'GUESS' | 'FINISHED';


export type GameSettings = {
  animate: boolean,
  speedMs?: number,
  maxLength?: number,
}

export const DEFAULT_GAME_SETTINGS = {
  animate: true,
  speedMs: 1000,
  maxLength: 10,
}

function App() {
  const regenerateWord = () => generate({ minLength: 3, maxLength: 7 });

  const [gameState, setGameState] = useState<GameState>('ZERO');
  const [gameSettings, setGameSettings] = useState<GameSettings>(DEFAULT_GAME_SETTINGS);
  const [word, setWord] = useState(regenerateWord());

  const stringWord = Array.from(word).join('');

  const onSettingsChanged = (settings: GameSettings) => {
    setGameSettings(gameSettings);
  }

  const onGameStart = () => {
    setGameState('RUNNING');
  }

  const onGameEnd = () => {
    setGameState('GUESS');
  }

  const handleGuess = (guess: string) => {
    if (guess === stringWord) {
      alert('you did it');
      setWord(regenerateWord());
      setGameState('RUNNING');
    } else {
      alert('idiot, try again');
    }
  }

  function ZeroState() {
    return (
      <header>
        <h1>Welcome to fingerspeller!</h1>
        <Controls onSettingsChanged={onSettingsChanged} />
        <button onClick={onGameStart}>Ready to start?</button>
      </header>
    )
  }

  function getGameState() {
    if (gameState === 'ZERO') return <ZeroState />;
    else if (gameState === 'RUNNING') return <Word word={stringWord} onEnd={onGameEnd} />;
    else if (gameState === 'GUESS') return <Guess word={stringWord} onGuess={handleGuess} />;
    else return <ZeroState />;

  }

  return (
    <div className="App">
      {getGameState()}
    </div>
  );

}

export default App;
