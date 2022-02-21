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
      state.isLoading = false;
    })
    // .addCase(UserActions.isLoadingAction, (state, action) => {
    //   state.isLoading = action.payload.status;
    // })
    .addCase(UserActions.loginAction, (state, action) => {
      state.loginError = undefined;
      state.isLoading = true;
      console.log('state.isLoading',state.isLoading);
    })
    .addCase(UserActions.loginSuccessAction, (state, action) => {
      state.isAuth = action.payload;
      state.isLoading = false;
      console.log('state.isLoading',state.isLoading);
    })
    .addCase(UserActions.loginErrorAction, (state, action) => {
      state.loginError = action.payload.error;
      state.isLoading = false;
      console.log('state.isLoading',state.isLoading);
    })
    .addCase(UserActions.signUpAction, (state, action) => {
      state.signUpError = undefined;
      state.isLoading = false;
      console.log('state.isLoading',state.isLoading);
    })

    .addCase(UserActions.signUpErrorAction, (state, action) => {
      state.signUpError = action.payload.error;
      state.isLoading = false;
      console.log('state.isLoading',state.isLoading);
    })
    .addCase(UserActions.signUpSuccessAction, (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.personalInfo.name = action.payload.name;
      state.personalInfo.lastName = action.payload.lastName;
      state.isLoading = false;
      console.log('state.isLoading',state.isLoading);
    });
});

export default userReducer;
