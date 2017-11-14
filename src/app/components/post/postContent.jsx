import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

const PostContent = ({ postContent }) => (
  <article>{postContent}</article>
);

PostContent.propTypes = {
  postContent: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  postContent: state.postContent,
});

export default connect(mapStateToProps, null)(PostContent);
