import { createAction } from '@reduxjs/toolkit'
import * as PointsActionTypes from '../actionTypes/pointsActionTypes';

export const addSinglePointsAction = createAction(PointsActionTypes.ADD_SINGLE_POINTS, (point) => ({
     payload: point
}));

export const addSinglePointsActionSuccess = createAction(PointsActionTypes.ADD_SINGLE_POINTS_SUCCESS, (point) => ({
     payload: point
}));

export const addSinglePointsActionError = createAction(PointsActionTypes.ADD_SINGLE_POINTS_ERROR, (error) => ({
     payload: { error },
}));

export function addSinglePointsError(arg0: string): any {
  throw new Error('Function not implemented.');
}

