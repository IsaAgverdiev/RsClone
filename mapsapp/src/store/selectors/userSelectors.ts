import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../store';
import get from 'lodash/get';

const userSelector = (state: AppState) => get(state, 'user', {});

export const isAuthSelector = createSelector(userSelector, userState =>
  get(userState, 'isAuth', false)
);


export const personalInfoSelector = createSelector(userSelector, userState =>
  get(userState, 'personalInfo', {})
);

export const nameSelector = createSelector(personalInfoSelector, personalInfo =>
  get(personalInfo, 'name', null)
);
export const lastNameSelector = createSelector(personalInfoSelector, personalInfo =>
  get(personalInfo, 'lastName', null)
);
