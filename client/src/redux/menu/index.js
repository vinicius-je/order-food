import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const getMenuItems = createAction('GET_MENU_ITEMS')
export const addNewMenuItem = createAction('ADD_MENU_ITEM')
export const deleteMenuItem = createAction('DELETE_MENU_ITEM')
export const editMenuItem = createAction('EDIT_MENU_ITEM')


export default createReducer(INITIAL_STATE, {
    [getMenuItems.type]: (state, action) => [...action.payload],
    [addNewMenuItem.type]: (state, action) => [...state, action.payload],
    [deleteMenuItem.type]: (state, action) => state.filter(item => item._id !== action.payload),
    [editMenuItem.type]: (state, action) => state.forEach(item => item._id === action.payload._id ? item = action.payload : item)
})