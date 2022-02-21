import { takeEvery, all } from 'redux-saga/effects';
import { call, put } from 'typed-redux-saga';

import * as PointsActions from '../actions/pointsActions';
import * as PointsActionTypes from '../actionTypes/pointsActionTypes';
import { addPointDb } from '../../firebase'

type FirebaseError = { message: string };

function* AddSinglePointsWorker(action: ReturnType<typeof PointsActions.addSinglePointsAction>) {
  const point = action.payload;
  try {
   yield* call(addPointDb, point);
  } catch (error: unknown) {
    const { message } = error as FirebaseError;
    yield put(PointsActions.addSinglePointsError(message.replace('Firebase: ', '')));
  }
}

function* AddSinglePointsWatcher() {
  yield takeEvery(PointsActionTypes.ADD_SINGLE_POINTS, AddSinglePointsWorker);
}

export default function* pointsSaga() {
  yield all([AddSinglePointsWatcher()]);
}