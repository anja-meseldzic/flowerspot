const initialState = {
  flowers: [],
};

function FlowersReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FLOWERS":
      return { flowers: [...action.payload] };
    default:
      return state;
  }
}
export default FlowersReducer;
