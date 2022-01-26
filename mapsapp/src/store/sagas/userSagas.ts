import { takeEvery, put, all } from 'redux-saga/effects';
import { call, select } from 'typed-redux-saga';

import * as UserActions from '../actions/userActions';
import * as UserActionTypes from '../actionTypes/userActionTypes';
import * as UserSelectors from '../selectors/userSelectors';

function* SignUpWorker(action: ReturnType<typeof UserActions.loginAction>) {}

function* SignUpWatcher() {
 
}

export default function* userSaga() {
  console.log('saga is ready');
}
