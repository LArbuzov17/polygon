/* eslint-disable react/display-name */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import Loader from './Loader';
import { fetchPost } from '../redux/actions';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.posts.fetchedPosts;
  });
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <button type="button" className="btn btn-primary" onClick={() => dispatch(fetchPost())}>
        Загрузить
      </button>
    );
  }

  return posts.map((post) => <Post post={post} key={post.id} />);
};
