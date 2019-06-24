import { setUser, logout } from "../components/withAuth/services";
import axios from 'axios';
//Login
export const LOGINFETCH = "LOGINFETCH";
export const LOGINSUCCESS = "LOGINSUCCESS";
export const LOGINFAILURE = "LOGINFAILURE";

const URL = "https://chef-portfolio-bw.herokuapp.com/api"

export const login = (username, password) => dispatch => {
    dispatch({ type: LOGINFETCH });
    console.log("Here");
    axios
      .post(`${URL}/auth/login`, {
        username: username,
        password: password
      })
      .then(res => {
        localStorage.setItem('token',res.data.token);
        console.log(res.data.token);
        dispatch({ type: LOGINSUCCESS, payload: res.data });
      })
      .catch(res => {
        logout(callback => {
          alert(res);
        });
        dispatch({
          type: LOGINFAILURE,
          payload: res.data
        });
      });
  };

//Registartion
export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
export const registration = addUser => dispatch => {
  dispatch({ type: REGISTRATION_START });
  return axios
    .post(`${URL}/`, addUser)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
      dispatch({ type: REGISTRATION_SUCCESS });
      return true;
    })
    .catch(err => {
        console.log(err.response)
        dispatch({type: REGISTRATION_FAILURE, payload: err.response})});
};
