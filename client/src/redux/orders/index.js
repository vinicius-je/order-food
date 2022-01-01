import { createAction, createReducer } from "@reduxjs/toolkit"

const CLIENT_ORDER = [];

export const getClientOrder = createAction('GET_CLIENT_ORDER');
export const removeClientOrder = createAction('REMOVE_CLIENT_ORDER');

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
// check if order exist
const orderExist = (state, payload) => {
    return state.find(item => item.id === payload.id);
}

const counter = (state, payload ,type) => {
    state.forEach(item => {
        if(item.id === payload){
            if(type === 'INCREMENT'){
                item.quantity += 1;
                item.value = item.quantity * item.price;
            }else if(item.quantity === 1){
                return item.quantity;
            }else{
                item.quantity -= 1;
                item.value = item.quantity * item.price;
            }
        }
    })
}

export default createReducer(CLIENT_ORDER, {
    [getClientOrder]: (state, action) => orderExist(state, action.payload) ? alert('order exist') : [...state, action.payload] ,
    [removeClientOrder]: (state, action) => state.filter(state => state.id !== action.payload),
    [increment]: (state, action) => counter(state, action.payload, action.type),
    [decrement]: (state, action) => counter(state, action.payload, action.type)
})
