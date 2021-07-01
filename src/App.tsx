<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import { BrowserRouter, Route } from 'react-router-dom'; 
import { Login } from './pages/Login'
import { Andares } from './pages/Andares' 
import { Andar } from './pages/Andar'
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
      <Route path="/andares" exact component={Andares}></Route>
      <Route path="/andar" exact component={Andar}></Route>
      
    </BrowserRouter>
>>>>>>> 39abd98fd67447e3aa14d9c97e5de92a1dab63be
  );
}

export default App;
