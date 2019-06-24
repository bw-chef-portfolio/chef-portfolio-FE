import axios from 'axios';

export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
const url = 'https://chef-portfolio-bw.herokuapp.com/api'
export const addUser = addUser => dispatch => {
  console.log(addUser)
  dispatch({ type: REGISTRATION_START });
   axios
    .post(`${url}/auth/register`, addUser)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
      dispatch({ type: REGISTRATION_SUCCESS, payload: res.data});
      return true;
    })
    .catch(err => {
        console.log(err.response)
        dispatch({type: REGISTRATION_FAILURE, payload: err.response})});
};