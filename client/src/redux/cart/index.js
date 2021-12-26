import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {show: false};

export const showCartSideBar = createAction('SHOW_CART_SIDEBAR');
export const toggleCartSideBar = createAction('TOGGLE_CART_SIDEBAR');


export default createReducer(INITIAL_STATE, {
    [showCartSideBar.type]: (state, action) => ({...state, show: action.payload}),
    [toggleCartSideBar.type]: (state, action) => ({...state, show: !state.show})
})