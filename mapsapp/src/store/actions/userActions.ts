import { createAction } from '@reduxjs/toolkit';
import * as UserActionTypes from '../actionTypes/userActionTypes';

export const logoutAction = createAction(UserActionTypes.LOGOUT, () => ({
  payload: false,
}));

export const loginAction = createAction(UserActionTypes.LOGIN, () => ({
  payload: true,
}));
export const updateUserDataAction = createAction(UserActionTypes.UPDATE_USER_DATA, (name, lastName) => ({
  payload: {
    name,
    lastName
  }
}));

