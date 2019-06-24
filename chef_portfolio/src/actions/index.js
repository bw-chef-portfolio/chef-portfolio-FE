import axios from 'axios';

export const REGISTRATION_START = 'LOGIN_START';
export const REGISTRATION_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTRATION_FAILURE = 'LOGIN_FAILURE';
export const registration = creds => dispatch => {
  dispatch({ type: REGISTRATION_START });
  return axios
    .post('', creds)
    .then(res => {
        console.log(res)
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: REGISTRATION_SUCCESS });
      return true;
    })
    .catch(err => console.log(err.response));
};