import { createReducer } from "@reduxjs/toolkit"

interface UserState {
  isAuth: boolean,
}

const initialState: UserState = {
  isAuth: false,

}

const userReducer = createReducer(initialState, (builder) => {})
builder.addCase()
