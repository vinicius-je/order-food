import { configureStore } from "@reduxjs/toolkit";

import menuReducer from './menu'
import cartReducer from './cart'
import userReducer from './user'

export default configureStore({
    reducer:{
        menu: menuReducer,
        cart: cartReducer,
        user: userReducer
    }
})