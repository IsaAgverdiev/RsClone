import { takeEvery, put, all } from 'redux-saga/effects';
import { call, select } from 'typed-redux-saga';

import * as UserActions from '../actions/userActions';
import * as UserActionTypes from '../actionTypes/userActionTypes';
import * as UserSelectors from '../selectors/userSelectors';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

type FirebaseError = { message: string };

function* SignUpWorker(action: ReturnType<typeof UserActions.SignUp>) {
  const { email, password, navigate, name, lastName } = action.payload;
  console.log(action.payload);
  try {
    const auth = getAuth();
    const user = yield* call(createUserWithEmailAndPassword, auth, email, password);
    const id = user.uid;
    console.log(user);
    yield put(UserActions.SignUpSuccess(name, lastName, id))
    
    navigate('/main');
  } catch (error: unknown) {
    const { message } = error as FirebaseError;
    yield put(UserActions.signUpError(message.replace('Firebase: ', '')));
  }
}

function* SignUpWatcher() {
  yield takeEvery(UserActionTypes.SIGN_UP, SignUpWorker);
}

export default function* userSaga() {
  yield all([SignUpWatcher()]);
}
