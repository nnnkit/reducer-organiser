import { FETCH_ARTICLES } from "../types";

export default function articles(state = null, action){
  console.log(action, 'in reducers');
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}