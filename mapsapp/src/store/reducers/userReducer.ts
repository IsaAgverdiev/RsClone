import { createReducer } from '@reduxjs/toolkit';
import * as UserActions from '../actions/userActions';

export interface UserState {
  isAuth: boolean;
  personalInfo: {
    name: string;
    lastName: string;
  };
  signUpError?: string;
}

const initialState: UserState = {
  isAuth: true,
  personalInfo: {
    name: 'Marina',
    lastName: 'Lastname'
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
    })
    .addCase(UserActions.updateUserDataAction, (state, action) => {
      state.personalInfo.name = action.payload.name;
      state.personalInfo.lastName = action.payload.lastName;
    })
});

export default userReducer;
