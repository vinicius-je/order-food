import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const getMenuItems = createAction('GET_MENU_ITEMS')
export const addNewMenuItem = createAction('ADD_MENU_ITEM')

export default createReducer(INITIAL_STATE, {
    [getMenuItems.type]: (state, action) => [...action.payload],
    [addNewMenuItem.type]: (state, action) => [...state, action.payload]
})