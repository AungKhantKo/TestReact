// App.js
import logo from './logo.svg';
import './App.css';
import { One } from './AppCopy'; 
// import TestTest from './componets/TestTest'; // ✅ Importing named export

function AppTest() {
  return (
    <div class="container">
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

        {/* ✅ Using class component */}
        
      </header>     
    </div>
    <One/>
    </div>
  );
}

export default AppTest;
