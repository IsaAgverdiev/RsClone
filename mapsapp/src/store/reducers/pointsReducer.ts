import { createReducer } from '@reduxjs/toolkit';
import { FirstInputPolyfillEntry } from 'web-vitals';
import * as PointsActions from '../actions/pointsActions';

export interface PointsState {
  points: {
    single?: IPoint[],
    multiple?: IPoint[]
  }
}

interface IPoint {
  lng: number,
  let: number,
  type: string
}

const initialState: PointsState = {
  points: {
    single: [],
    multiple: []
  }
};

const pointsReducer = createReducer(initialState, builder => {
  builder
    .addCase(PointsActions.addSinglePointsAction, (state, action) => {
      state.points.single = action.payload
    })
})

export default pointsReducer;

