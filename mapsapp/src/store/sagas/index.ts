import { all } from 'redux-saga/effects';
import pointsSaga from './pointSaga';
import userSaga from './userSagas';

export default function* rootSaga() {
  yield all([userSaga(), pointsSaga()]);
}
