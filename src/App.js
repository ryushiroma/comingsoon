import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Página em manutenção
        </p>
        <a
          className="App-link"
          href="https://api.whatsapp.com/send?phone=5511974766401&text=Ola%20shyros" //whatsapp da loja com botaozinho
          target="_blank"
          rel="noopener noreferrer"
        >
          Entre em contato pelo whatsapp (11)97476-6401
        </a>
      </header>
    </div>
  );
}

export default App;
