import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { useAuth } from './context/context';

function App() {
  const navigate = useNavigate();
  const { setToken, token } = useAuth();
  const tokenValue = 'a51e828b-' + Math.random() * 100;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <input type="text" name="token" id="token" value={token ?? ''}
          onChange={() => console.log(token)} />
        <button onClick={() => navigate('/page1')}>Go to page1</button>
        <button onClick={() => navigate('/page2')}>Go to page2</button>
        <button onClick={() => setToken(tokenValue)}>Login</button>
        <button onClick={() => setToken(null)}>Logout</button>
      </header>
    </div>
  );
}

export default App;
