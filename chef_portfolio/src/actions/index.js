//Login
export const LOGINFETCH = "LOGINFETCH";
export const LOGINSUCCESS = "LOGINSUCCESS";
export const LOGINFAILURE = "LOGINFAILURE";

xport const login = (username, password) => dispatch => {
    dispatch({ type: LOGINFETCH });
    axios
      .post(`/login`, {
        username: username,
        password: password
      })
      .then(res => {
        setUser({ token: res.data.payload });
        dispatch({ type: LOGINSUCCESS, payload: res.data.payload });
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