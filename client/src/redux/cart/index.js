import { createAction, createReducer } from "@reduxjs/toolkit";

const CLIENT_ORDER = []

export const getClientOrder = createAction('GET_CLIENT_ORDER')

export default createReducer(CLIENT_ORDER, {
    [getClientOrder]: (state, action) => [...state, action.payload]
})