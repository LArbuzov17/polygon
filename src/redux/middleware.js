/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */

import { CREATE_POST } from './types';
import { showAlert } from './actions';

const forbidden = ['fuck', 'shit'];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((word) => action.payload.title.includes(word));
        if (found.length) {
          return dispatch(showAlert('За вами выехали'));
        }
      }
      return next(action);
    };
  };
}
