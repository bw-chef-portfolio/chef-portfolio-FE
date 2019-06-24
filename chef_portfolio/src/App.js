import React from 'react';
import Registration from './components/Registration.js';
import { Route } from 'react-router-dom';
import './App.css';
import Login from "./components/Login/Login.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    
      <Route path="/login" component={Login} />
    
  );
}

export default App;
