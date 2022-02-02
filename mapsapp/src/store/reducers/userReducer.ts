import { createReducer } from '@reduxjs/toolkit';
import * as UserActions from '../actions/userActions';

export interface UserState {
  isAuth: boolean;
  personalInfo: {
    name: string;
  };
  signUpError?: string;
}

const initialState: UserState = {
  isAuth: true,
  personalInfo: {
    name: 'Marina',
  },
  signUpError: undefined,
};

const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(UserActions.logoutAction, (state, action) => {
      state.isAuth = action.payload;
    })
    .addCase(UserActions.loginAction, (state, action) => {
      state.isAuth = action.payload;
    })
    .addCase(UserActions.signUpError, (state, action) => {
      state.signUpError = action.payload.error;
    })
    .addCase(UserActions.SignUp, (state, action) => {
      state.signUpError = undefined;
    });
});

export default userReducer;
