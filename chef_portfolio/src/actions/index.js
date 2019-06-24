import axios from 'axios';

export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
const url = ''
export const registration = addUser => dispatch => {
  dispatch({ type: REGISTRATION_START });
  return axios
    .post(`${url}/`, addUser)
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