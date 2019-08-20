import { FETCH_ARTICLES, ADD_ARTICLE } from "../types";

export function addArticles(payload) {
  return {
    type: FETCH_ARTICLES,
    payload
  }
}
export function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload
  }
}
export function fetchArticles() {
  return (dispatch) => {
    fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=0`)
      .then(res => res.json())
      .then(articles => {
        console.log(articles);
        dispatch(addArticles(articles));
      });
  }
}
export function fetchArticle(slug) {
  return (dispatch) => {
    fetch(`https://conduit.productionready.io/api/articles/${slug}`)
      .then(res => res.json())
      .then(article => {
        dispatch(addArticle(article));
      });
  }
}
