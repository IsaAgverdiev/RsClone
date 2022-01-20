import { createReducer } from '@reduxjs/toolkit'

export interface MapState {
  // container: HTMLElement,
  style: string,
  center: {
    lng: number,
    lat: number,
  },
  zoom: number
}


const initialState: MapState = {
  style: "mapbox://styles/mapbox/streets-v11",
  center: {
    lng: -70.9,
    lat: 42.35
  },
  zoom: 9
}

const mapReducer = createReducer(initialState, (builder) => {
  // builder.addCase(MapActions.logoutAction, (state, action) => {
  //     state.isAuth = action.payload
})



