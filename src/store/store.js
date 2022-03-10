import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/AuthReducer.js";
import FlowersReducer from "./reducers/FlowersReducer.js";
import SightingsReducer from "./reducers/SightingsReducer.js";
import UserReducer from "./reducers/UserReducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    auth: authReducer,
    flowers: FlowersReducer,
    user: UserReducer,
    sightings: SightingsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
