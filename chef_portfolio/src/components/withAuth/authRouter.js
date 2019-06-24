import React from "react";
import {
  BrowserRouter as 
  Route,
  Redirect
} from "react-router-dom";
import { isLoggedIn } from "./services";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="./login" />
      )
    }
  />
);

export default PrivateRoute;