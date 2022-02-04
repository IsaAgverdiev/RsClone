import { takeEvery, put, all } from 'redux-saga/effects';
import { call, select } from 'typed-redux-saga';

import * as UserActions from '../actions/userActions';
import * as UserActionTypes from '../actionTypes/userActionTypes';
import * as UserSelectors from '../selectors/userSelectors';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import * as PointsActions from '../actions/pointsActions';
import { addSinglePointsAction } from '../actions/pointsActions';
import { showPoints } from '../../firebase';

type FirebaseError = { message: string };

function* SignUpWorker(action: ReturnType<typeof UserActions.SignUpAction>) {
  const { email, password, navigate } = action.payload;
  try {
    const auth = getAuth();
    const user = yield* call(createUserWithEmailAndPassword, auth, email, password);

    navigate('/main');
  } catch (error: unknown) {
    const { message } = error as FirebaseError;
    yield put(UserActions.signUpErrorAction(message.replace('Firebase: ', '')));
  }
}

function* loginWorker(action: ReturnType<typeof UserActions.SignUpAction>) {
  const { email, password, navigate } = action.payload;
  try {
    const auth = getAuth();
    const user = yield* call(signInWithEmailAndPassword, auth, email, password);
    let data = showPoints();
    data.then(points => {
      const singlePoints = points.filter(point => point.type === 'single');
      addSinglePointsAction(singlePoints);
    });
    
    navigate('/main');
  } catch (error: unknown) {
    const { message } = error as FirebaseError;
    yield put(UserActions.signUpErrorAction(message.replace('Firebase: ', '')));
  }
}

function* SignUpWatcher() {
  yield takeEvery(UserActionTypes.SIGN_UP, SignUpWorker);
}
function* loginWatcher() {
  yield takeEvery(UserActionTypes.LOGIN, loginWorker);
}

export default function* userSaga() {
  yield all([SignUpWatcher(), loginWatcher()]);
}
