import { createAction } from '@reduxjs/toolkit'
import * as PointsActionTypes from '../actionTypes/pointsActionTypes';

export const addSinglePointsAction = createAction(PointsActionTypes.ADD_SINGLE_POINTS, (points) => ({
     payload: points
}));

