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
          href="https://api.whatsapp.com/send?phone=5511974766401" //whatsapp da loja com botaozinho
          target="_blank"
          rel="noopener noreferrer"
        >
          Entre em contato pelo whatsapp (Matriz)
        </a>

        <a
          className="App-link"
          href="https://api.whatsapp.com/send?phone=5511940461865" //whatsapp da loja com botaozinho
          target="_blank"
          rel="noopener noreferrer"
        >
          Entre em contato pelo whatsapp (Filial)
        </a>

      </header>
    </div>
  );
}

export default App;
