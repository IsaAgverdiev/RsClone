import { createAction } from '@reduxjs/toolkit';
import * as UserActionTypes from '../actionTypes/userActionTypes';

export const logoutAction = createAction(UserActionTypes.LOGOUT, () => ({
  payload: false,
}));

export const loginAction = createAction(UserActionTypes.LOGIN, (email, password, navigate) => ({
  payload: { email, password, navigate },
}));

export const loginSuccessAction = createAction(UserActionTypes.LOGIN_SUCCESS, () => ({
  payload: true,
}));

export const loginErrorAction = createAction(UserActionTypes.LOGIN_ERROR, error => ({
  payload: { error },
}));

export const signUpAction = createAction(UserActionTypes.SIGN_UP, (email, password, navigate) => ({
  payload: { email, password, navigate },
}));

export const signUpSuccessAction = createAction(UserActionTypes.SIGN_UP_SUCCESS, () => ({
  payload: true,
}));

export const signUpErrorAction = createAction(UserActionTypes.SIGN_UP_ERROR, error => ({
  payload: { error },
}));
