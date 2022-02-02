import { createAction } from '@reduxjs/toolkit';
import * as UserActionTypes from '../actionTypes/userActionTypes';

export const logoutAction = createAction(UserActionTypes.LOGOUT, () => ({
  payload: false,
}));

export const loginAction = createAction(UserActionTypes.LOGIN, () => ({
  payload: true,
}));

export const SignUp = createAction(UserActionTypes.SIGN_UP, (email, password, navigate) => ({
  payload: { email, password, navigate },
}));

export const SignUpSuccess = createAction(UserActionTypes.SIGN_UP_SUCCESS, () => ({
  payload: true,
}));

export const signUpError = createAction(UserActionTypes.SIGN_UP_ERROR, error => ({
  payload: { error },
}));
