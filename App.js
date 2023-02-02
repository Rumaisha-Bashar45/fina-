import logo from './logo.svg';
import './App.css';
import Comp from './Comp';
import CompX from './Components/CompX';
import Test from './Test';
import API from './API';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Comp id="25"></Comp>
        <CompX dept="CSE"></CompX>
      
      <Test id="25"></Test>
      <API dept="CSE"></API>





      </header>
    </div>
  );
}

export default App;
