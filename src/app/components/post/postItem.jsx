import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const PostItem = ({
  postId, postTitle, customLink, postDate, postTags, postAuthor,
}) => (
  <article>
    <h1><Link to={customLink}>{postTitle}</Link></h1>
    <time>
      <span className="post-month">{postDate.month}</span>
      <span className="post-day">{postDate.day}</span>
      <span className="post-year">{postDate.year}</span>
    </time>
    <footer>
      <span>
        {'posted in '}
      </span>
    </footer>
  </article>
);

PostItem.propTypes = {
  postId: PropTypes.number.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDate: PropTypes.object.isRequired,
  postTags: PropTypes.array.isRequired,
  postAuthor: PropTypes.string.isRequired,
};

export default PostItem;
