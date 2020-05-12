/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Post;
