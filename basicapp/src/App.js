import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /*<div className="App">
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
      </header>
    </div>
  );*/

  <div className='UserProfile'>
    <div className='Name'>
      <h1>Name: First Last</h1>
    </div>
    <div className='Username'>
      <h2>Username: username</h2>
    </div>
    <div className='Email-address'>
      <h2>Email: email address</h2>
    </div>
  </div>
  );
}

export default App;
