import { createAction } from '@reduxjs/toolkit'
import * as PointsActionTypes from '../actionTypes/pointsActionTypes';

export const addSinglePointsAction = createAction(PointsActionTypes.ADD_SINGLE_POINTS, () => ({
     payload: {
          single: [{
               lng: 20,
               let: 30,
               type: "single"  
          },
          {
               lng: 40,
               let: 10,
               type: "single"  
          },
     ],
          multiple: [{
               lng: 20,
               let: 30,
               type: "single"     
          }]
     }     
}));

