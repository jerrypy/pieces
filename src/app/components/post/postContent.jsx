import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPost } from './actions';

class PostContent extends Component {
  componentDidMount() {
    this.props.onPostContentLoad(this.props.match.params.customLink);
  }

  render() {
    return (
      <article>{this.props.postContent.content}</article>
    );
  }
}

PostContent.propTypes = {
  postContent: PropTypes.object.isRequired,
  onPostContentLoad: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  postContent: state.postContent,
  match: ownProps.match,
});

const mapDispatchToProps = dispatch => ({
  onPostContentLoad: (customLink) => {
    dispatch(fetchPost(customLink));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContent));
