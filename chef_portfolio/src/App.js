import React from 'react';
import Registration from './components/Registration'
import Login from './components/Login'
import NavBar from './components/NavBar'
import RecipePage from './components/RecipePage'
import { Route, Link } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route path="/recipes" component={RecipePage} />
      <Route exact path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      
    </div>
  );
}

export default App;
