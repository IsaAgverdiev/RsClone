import { createReducer } from '@reduxjs/toolkit';
import * as UserActions from '../actions/userActions';

export interface UserState {
  isAuth: boolean;
  personalInfo: {
    name: string;
    lastName: string;
  };
}

const initialState: UserState = {
  isAuth: true,
  personalInfo: {
    name: 'Marina',
    lastName: 'Lastname'
  },
};

const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(UserActions.logoutAction, (state, action) => {
      state.isAuth = action.payload;
    })
    .addCase(UserActions.loginAction, (state, action) => {
      state.isAuth = action.payload;
    })
    .addCase(UserActions.updateUserDataAction, (state, action) => {
      state.personalInfo.name = action.payload;
      state.personalInfo.lastName = action.payload;
    })
});

export default userReducer;
