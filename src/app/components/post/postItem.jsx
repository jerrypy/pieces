import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const PostItem = ({
  postTitle, customLink, postDate, postTags,
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
        {'post in '}
        {postTags.map(tag => (
          // FIXME: tag现在传过来的是id的数组，需要把整个tag内容取过来
          <Link key={tag.id} to={`/tag/${tag.name}`}>{tag.name}</Link>
        ))}
      </span>
    </footer>
  </article>
);

PostItem.propTypes = {
  postTitle: PropTypes.string.isRequired,
  customLink: PropTypes.string.isRequired,
  postDate: PropTypes.object.isRequired,
  postTags: PropTypes.array.isRequired,
};

export default PostItem;
