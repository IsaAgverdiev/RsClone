import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import userReducer, { UserState } from './reducers/userReducer';

export interface AppState {
    user: UserState
}


export const reducer = {
    user: userReducer,
}

const store = configureStore({
    reducer,
    middleware: [logger],
    devTools: true
})

export default store