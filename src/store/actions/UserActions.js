import AuthService from "../../api/AuthService";

export const setUserInfo = (payload) => ({
  type: "SET_USER_INFO",
  payload,
});

export const getUserInfo = () => {
  return (dispatch) => {
    AuthService.getUserInfo()
      .then((res) => {
        dispatch(setUserInfo(res.data.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
