import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchArticle } from './actions';

class Single extends Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.slug);
  }

  render() {
    return (
      <div>
        {this.props.article && this.props.article.body}
      </div>
    )
  }
}

const mapState = ({article}) => ({...article});
const mapDispatch = {
  fetchArticle
}

export default connect(mapState, mapDispatch)(Single);
