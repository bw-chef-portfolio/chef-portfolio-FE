import React from 'react';
import Registration from './components/Registration.js'
import NavBar from './components/NavBar'
import RecipePage from './components/RecipePage'
import { Route, Link } from 'react-router-dom'
import './App.css';
import Login from "./components/Login/Login.js";
import { BrowserRouter as Router } from "react-router-dom";


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
