import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
    <div className="App-intro">
      <Intro />
    </div>
    </div>
  );
}

export default App;
