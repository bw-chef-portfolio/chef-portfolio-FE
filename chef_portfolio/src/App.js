import React from 'react';
import Registration from './components/Registration';
import { Route, Link } from 'react-router-dom';
import './App.css';
import PrivateRoute from "./components/withAuth/authRouter.js";
import Login from "./components/Login/Login.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Route path="/login" component={Login} />
  );
}

export default App;
