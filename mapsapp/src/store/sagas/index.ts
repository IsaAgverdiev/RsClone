import { all } from 'redux-saga/effects';
import userSaga from './userSagas';
import pointSaga from './pointSagas';


export default function* rootSaga() {
  yield all([userSaga(), pointSaga()]);
}
