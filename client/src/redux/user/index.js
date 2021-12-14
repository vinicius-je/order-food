import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = []

export const login = createAction('USER_LOGIN')

export default createReducer(INITIAL_STATE, {
    [login.type]: (state, action) => console.log(action.payload)
})