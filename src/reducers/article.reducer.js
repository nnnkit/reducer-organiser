import { FETCH_ARTICLE, ADD_ARTICLE } from "../types";

export default function article(state = null, action){
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}