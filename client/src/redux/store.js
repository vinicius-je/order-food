import { configureStore } from "@reduxjs/toolkit";

import menuReducer from './menu'
import ordersReducer from './orders'
import userReducer from './user'
import cartReducer from './cart'

export default configureStore({
    reducer:{
        menu: menuReducer,
        orders: ordersReducer,
        user: userReducer,
        cart: cartReducer
    }
})