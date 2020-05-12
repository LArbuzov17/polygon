/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
});
