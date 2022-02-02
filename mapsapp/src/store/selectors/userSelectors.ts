import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../store';
import get from 'lodash/get';

const userSelector = (state: AppState) => get(state, 'user', {});

export const isAuthSelector = createSelector(userSelector, userState =>
  get(userState, 'isAuth', false)
);

export const signUpErrorSelector = createSelector(userSelector, userState =>
  get(userState, 'signUpError', undefined)
);

export const personalInfoSelector = createSelector(userSelector, userState =>
  get(userState, 'personalInfo', {})
);

export const nameSelector = createSelector(personalInfoSelector, personalInfo =>
  get(personalInfo, 'name', null)
);
