const initialState = {
  user: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        user: { ...action.payload.user },
      };
    default:
      return state;
  }
};

export default UserReducer;
