import {combineReducers} from 'redux';
import articles from './articles.reducer';
import article from './article.reducer';

const rootReducers = combineReducers({
  articles,
  article
});

export default rootReducers;