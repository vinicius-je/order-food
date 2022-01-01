import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {show: false}

export const addAlert = createAction('ADD_ALERT');
export const removeAlert = createAction('REMOVE_ALERT');

export default createReducer(INITIAL_STATE, {
    [addAlert.type]: (state, action) => ({...state, show: true}),
    [removeAlert.type]: (state, action) => ({...state, show: false})
})