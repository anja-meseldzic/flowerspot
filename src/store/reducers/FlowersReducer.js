const initialState = {
  flowers: [],
  flowerDetails:null,
  sightings:[]
};

function FlowersReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FLOWERS":
      return { ...state, flowers: [...action.payload] };
    case "SET_DETAILS":
      return {...state, flowerDetails: {...action.payload } }
    case 'SET_SIGHTINGS':
      return {...state, sightings: [...action.payload]}
    default:
      return state;
  }
}
export default FlowersReducer;
