const initialState = {
  user: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        user: {...action.payload } ,
      };
    default:
      return state;
  }
};

export default UserReducer;
