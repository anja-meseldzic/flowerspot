import axios from "axios";

export const setToken = (payload) => ({
  type: "SET_TOKEN",
  payload,
});

export const logOut = () => ({
  type: "LOG_OUT"
});

export const login = (payload) => {
  return (dispatch) => {
    axios
      .post(`https://flowrspot-api.herokuapp.com/api/v1/users/login`, payload)
      .then((res) => {
        localStorage.setItem("token", res.data.auth_token);
        dispatch(setToken(res.data.auth_token));
      }).catch((err) => {
        console.log(err.response.data.error);
      });
  };
};

export const registerUser = (payload) => {
  return (dispatch) => {
    axios
      .post(
        `https://flowrspot-api.herokuapp.com/api/v1/users/register`,
        payload
      )
      .then((res) => {
        localStorage.setItem("token", res.data.auth_token);
        dispatch(setToken(res.data.token));
        
      })
      .catch((err) => {
        console.log(err.response.status); 
        console.log(err.response.data.error);
      });
  };
};


export const logoutUser = () => {
    return (dispatch) => {
      localStorage.removeItem("token");
      dispatch(logOut())
    }
}