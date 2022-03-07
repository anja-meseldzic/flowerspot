const initialState = {
  token: null,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return { token: action.payload};
    case "LOG_OUT":
      return { token : null};
    default:
      return state;
  }
}

export default AuthReducer;