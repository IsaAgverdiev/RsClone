import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import pointsReducer, { PointsState } from './reducers/pointsReducer';
import userReducer, { UserState } from './reducers/userReducer';

export interface AppState {
    user: UserState,
    points: PointsState
}

export const reducer = {
    user: userReducer,
    points: pointsReducer
}

const store = configureStore({
    reducer,
    middleware: [logger],
    devTools: true
})

export default store