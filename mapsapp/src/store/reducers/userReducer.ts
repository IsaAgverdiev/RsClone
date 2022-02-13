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
  loginError?: string;
}

const initialState: UserState = {
  isAuth: true,
  isLoading: false,
  personalInfo: {
    name: '',
    lastName: '',
    id: '',
  },
  signUpError: undefined,
  loginError: undefined,
};

const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(UserActions.logoutAction, (state, action) => {
      state.isAuth = action.payload;
    })
    .addCase(UserActions.isLoadingAction, (state, action) => {
      state.isLoading = action.payload.status;
    })
    .addCase(UserActions.loginAction, (state, action) => {
      state.loginError = undefined;
    })
    .addCase(UserActions.loginSuccessAction, (state, action) => {
      state.isAuth = action.payload;
    })
    .addCase(UserActions.loginErrorAction, (state, action) => {
      state.loginError = action.payload.error;
    })
    .addCase(UserActions.signUpAction, (state, action) => {
      state.signUpError = undefined;
    })

    .addCase(UserActions.signUpErrorAction, (state, action) => {
      state.signUpError = action.payload.error;
    })
    .addCase(UserActions.signUpSuccessAction, (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.personalInfo.name = action.payload.name;
      state.personalInfo.lastName = action.payload.lastName;
    });
});

export default userReducer;
