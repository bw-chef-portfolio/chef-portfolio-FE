import React from 'react';
import Registration from './components/Registration'
import Login from './components/Login'
import { Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Registration />
      <Login />
    </div>
  );
}

export default App;
