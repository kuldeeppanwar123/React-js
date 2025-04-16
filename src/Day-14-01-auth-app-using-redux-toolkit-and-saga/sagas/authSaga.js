import { call, put, takeLatest } from "redux-saga/effects";
import { loginUserFailure, loginUserStart, loginUserSuccess } from "../redux/authSlice";
import { authenticateUserApi } from "../authApi";

// worker
function* handleLogin(action) {
  try {
    const {username, password} = action.payload;
    const user = yield call(authenticateUserApi, username, password);
    yield put(loginUserSuccess(user));    
  } catch (error) {
    yield put(loginUserFailure(error.message));
  }
}

// watcher
function* authSaga() {
  yield takeLatest(loginUserStart.type, handleLogin);
}

export default authSaga;
