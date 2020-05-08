/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Title here {post}</h5>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.number.isRequired,
};

export default Post;
