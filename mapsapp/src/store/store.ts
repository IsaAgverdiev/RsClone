import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import pointsReducer, { PointsState } from './reducers/pointsReducer';
import userReducer, { UserState } from './reducers/userReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export interface AppState {
  user: UserState;
  points: PointsState;
}

export const reducer = {
  user: userReducer,
  points: pointsReducer,
};

const store = configureStore({
  reducer,
  middleware: [logger, sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export default store;
