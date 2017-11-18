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
        { // FIXME: 这里这么写非常非常不优雅
          // TODO: tag和author现在是只有id的，需要把具体内容从对应entities拿出来
          this.props.posts.result.map((postId) => {
          const post = this.props.posts.entities.posts[postId];
          return <PostItem {...post} key={post.postId} />;
        })}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.object.isRequired,
  onPostListLoad: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  // TODO: get all posts list from state比如 getOnlyPostInfo(state)
  // TODO: and extract tag and author info from entities with id
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  onPostListLoad: (postType) => {
    dispatch(fetchAllPosts(postType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
