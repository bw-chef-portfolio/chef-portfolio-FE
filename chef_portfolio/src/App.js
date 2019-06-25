import React from 'react';
import Registration from './components/Registration.js'
import NavBar from './components/NavBar'
import RecipePage from './components/RecipePage'
import ChefPage from './components/withAuth/ChefPage'
import { Route } from 'react-router-dom'
import './App.css';
import Login from "./components/Login/Login.js";
import PrivateRoute from './components/withAuth/AuthRouter'

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route path="/recipes" component={RecipePage} />
      <Route exact path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={ChefPage} />
    </div>
  );
}

export default App;
