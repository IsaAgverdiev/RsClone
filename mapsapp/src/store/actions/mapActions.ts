import { createAction } from '@reduxjs/toolkit'
import * as MapActionTypes from '../actionTypes/mapActionTypes';

export const createMapAction = createAction(MapActionTypes.CREATE_MAP, () => ({
     payload: true
}));