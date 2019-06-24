import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrivateRoute from "./components/withAuth/authRouter.js";
import Login from "./components/LoginComponent/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Route path="/login" component={Login} />
  );
}

export default App;
