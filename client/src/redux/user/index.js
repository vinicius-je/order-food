import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = []

export const userLogin = createAction('USER_LOGIN')

export default createReducer(INITIAL_STATE, {
    [userLogin.type]: (state, action) => [{...action.payload}]
})