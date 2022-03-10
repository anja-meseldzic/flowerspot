const initialState = {
  allSightings: [],
};

const SightingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SIGHTINGS":
      return { ...state, allSightings: [...action.payload] };
    default:
      return state;
  }
};

export default SightingsReducer;
