import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import logo from './logo.png';
import './App.css';

function ComingSoon() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="texto" href="https://shyrosjeans.com.br/">
          Redirecionando para página principal
        </a>
        
         <Route exact path="/" render={() => (window.location = "https://shyrosjeans.com.br/")} />

      </header>
    </div>
  );
} 


const RedirectComponent = () => (<Redirect to="/"/>)

function App() {
  return (
    <Router>
      <Route path="/" component={ComingSoon} />
      <Route path="*" component={RedirectComponent} />
    </Router>
  )
}

export default App;
