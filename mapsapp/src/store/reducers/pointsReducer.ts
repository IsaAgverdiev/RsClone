import { createReducer } from '@reduxjs/toolkit';
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
  points: {}
};

const pointsReducer = createReducer(initialState, builder => {
  builder
    .addCase(PointsActions.addSinglePointsAction, (state, action) => {
     state.points = action.payload
    })
})

export default pointsReducer;

