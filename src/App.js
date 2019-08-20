import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom'
import './App.css';
import { addArticles, fetchArticles } from './actions';
import Single from './Single';

class App extends Component {
  state = {
    article: []
  }
  componentDidMount() {
    this.props.dispatch(fetchArticles());
  }
  render(){
    return (
      <div>
        <ul>
          {
            this.props.articles && this.props.articles.map(article => (
              <Link to={`/${article.slug}`}><h2>{article.title}</h2></Link>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapState(store) {
  console.log(store, 'store')
  return {
    ...store.articles
  }
}

export default connect(mapState)(App);
