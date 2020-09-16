import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import logo from './logo.png';
import './App.css';

function ComingSoon() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Redirecionando para página principal
        </p>

        <Route exact path="/" render={() => (window.location = "https://shyrosjeans.com.br/")} />
        
      </header>
    </div>
  );
} 

// import React from 'react';
// import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
// import './App.css';

// function ComingSoon() {
//   return (
//     <div className="App">
//       <p className="p">Redirecionando para página principal </p>
//       <div className="link">
//           <Route exact path="/" render={() => (window.location = "https://shyrosjeans.com.br/")} />
//       </div>
//     </div>
//   );
// } 

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
