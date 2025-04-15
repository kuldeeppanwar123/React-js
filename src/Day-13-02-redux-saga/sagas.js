import {call, put, takeEvery } from "redux-saga/effects";

async function apiUserFetch() {
  const res =  await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function* fetchUserWorker() {
  try {
    const users = yield call(apiUserFetch)
    yield put({type: 'FETCH_USERS_SUCCESS', payload: users})
  } catch (error) {
    yield put({type: 'FETCH_USERS_FAILURE', payload: error.message})
  }
} 

function* fetchUserWatcher() {
  yield takeEvery('FETCH_USERS_REQUEST', fetchUserWorker);
}

export default fetchUserWatcher;
