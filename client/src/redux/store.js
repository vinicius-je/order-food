import { configureStore } from "@reduxjs/toolkit";

import menuReducer from '../redux/menu'
import cartReducer from './cart'

export default configureStore({
    reducer:{
        menu: menuReducer,
        cart: cartReducer
    }
})