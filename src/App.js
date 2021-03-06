import logo from './logo.svg';
import './App.css';
import React,{ useEffect } from 'react';

function App() {

useEffect(() => {
  fetch(".netlify/functions/hello-world")
  .then(x => x.json())
  .then(data => console.log(data))
}, [] )

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
          My key is :)-- {process.env.REACT_APP_MY_KEY}
        </a>
      </header>
    </div>
  );
}

export default App;
