import { func } from "prop-types";
import { all, delay, put, select, takeEvery, takeLatest } from "redux-saga/effects"

export function* helloSaga () {
  console.log('Hello Sagas!')
}

// worker saga
export function* incrementAsync () {
  const count = yield select(state => state.count)
  console.log({count})
  yield delay(1000);
  yield put({type: 'INCREMENT'});
}

export function* decrementAsync () {
  yield delay(1000)
  yield put({type: 'DECREMENT'});
}

// watcher saga
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* watchDecrementAsync() {
  yield takeLatest('DECREMENT_ASYNC', decrementAsync)
}

export default function* rootSaga () {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchDecrementAsync()
  ])
}