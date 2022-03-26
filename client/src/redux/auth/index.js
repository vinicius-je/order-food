import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {auth: false}

export const userAuth = createAction('USER_AUTH');

export default createReducer(INITIAL_STATE, {
    [userAuth.type]: (state, action) => ({...state, auth: action.payload})
})