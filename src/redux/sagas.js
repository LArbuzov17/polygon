import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { REQUEST_POSTS, FETCH_POST } from './types';
import { showLoader, hideLoader, showAlert } from './actions';

function* fetchPosts() {
  try {
    const response = yield call(() => {
      return axios.get('http://localhost:3001/posts');
    });
    console.warn(response);
    const result = response.data;
    return result;
  } catch (e) {
    console.warn('error', e);
    yield put(showAlert('Ошибка при загрузке данных'));
    yield put(hideLoader());
  }
}

function* sagaWorker() {
  yield put(showLoader());
  const payload = yield call(fetchPosts);
  console.warn(payload);
  if (payload) {
    yield put({ type: FETCH_POST, payload });
    yield put(hideLoader());
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}
