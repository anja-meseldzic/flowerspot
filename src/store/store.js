import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/AuthReducer.js";
import FlowersReducer from "./reducers/FlowersReducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    auth: authReducer,
    flowers: FlowersReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
