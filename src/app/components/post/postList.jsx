import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './postItem';
import { fetchAllPosts } from './actions';

class PostList extends Component {
  componentDidMount() {
    this.props.onPostListLoad('post');
  }

  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <PostItem {...post} key={post.postId} />
        ))}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  onPostListLoad: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  onPostListLoad: (postType) => {
    dispatch(fetchAllPosts(postType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
