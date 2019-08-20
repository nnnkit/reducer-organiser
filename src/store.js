import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducers from './reducers';

const thunk = (store) => next => action => {
  if(typeof action === "function"){
    return action(store.dispatch);
  }
  return next(action);
}

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;