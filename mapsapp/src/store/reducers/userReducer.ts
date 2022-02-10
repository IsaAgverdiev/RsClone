import { createReducer } from '@reduxjs/toolkit';
import * as UserActions from '../actions/userActions';

export interface UserState {
  isAuth: boolean;
  isLoading: boolean;
  personalInfo: {
    name: string;
    lastName: string;
    id: string;
  };
  signUpError?: string;
}

const initialState: UserState = {
  isAuth: true,
  isLoading: false,
  personalInfo: {
    name: '',
    lastName: '',
    id: ''
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
    .addCase(UserActions.SignUpSuccess, (state, action) => {
      state.personalInfo.name = action.payload.name;
      state.personalInfo.lastName = action.payload.lastName;
      state.personalInfo.id = action.payload.id;
    })
});

export default userReducer;
