/* eslint-disable react/display-name */
import React from 'react';
import Post from './Post';

export default ({ posts }) => {
  if (!posts.length) {
    return <p className="text">Постов пока нет</p>;
  }
  return posts.map((post) => <Post post={post} key={post} />);
};
