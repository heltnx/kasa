
import Nav from './components/Nav.js';
import './assets/style/App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="../images/logo.svg" className="App-logo" alt="logo" />
        <Nav />
      </header>
      <div className="App-banniere"><h1>Chez vous, partout et ailleurs</h1></div>
    </div>
  );
}

export default App;
