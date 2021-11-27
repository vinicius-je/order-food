import { createAction, createReducer } from "@reduxjs/toolkit";

const CLIENT_ORDER = []

export const getClientOrder = createAction('GET_CLIENT_ORDER')
export const removeClientOrder = createAction('REMOVE_CLIENT_ORDER')

const orderExist = (state, payload) => {
    return state.find(item => item.id === payload.id)
}

export default createReducer(CLIENT_ORDER, {
    [getClientOrder]: (state, action) => orderExist(state, action.payload) ? alert('order exist') : [...state, action.payload] ,
    [removeClientOrder]: (state, action) => state.filter(state => state.id !== action.payload)
})
