import { createAction, createReducer } from "@reduxjs/toolkit"

const INITIAL_STATE = [];

export const userData = createAction('USER_DATA');
export const userLogout = createAction('USER_LOGOUT');

export default createReducer(INITIAL_STATE, {
    [userData.type]: (state, action) => [{...action.payload}],
    [userLogout.type]: (state, action) => [...action.payload]
})