import './App.css';
import { generate } from "random-words";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to fingerspeller!</h1>
        <p>First word: ${generate()}</p>
      </header>
    </div>
  );
}

export default App;
