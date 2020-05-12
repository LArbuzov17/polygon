/* eslint-disable import/prefer-default-export */

import {
  CREATE_POST,
  REQUEST_POSTS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from './types';

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
    payload: true,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
    payload: false,
  };
}

export function showAlert(message) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: message,
    });

    setTimeout(() => dispatch({ type: HIDE_ALERT, payload: null }), 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
    payload: null,
  };
}

export function fetchPost() {
  return {
    type: REQUEST_POSTS,
  };
}
