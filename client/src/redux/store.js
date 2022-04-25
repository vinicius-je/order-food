import { configureStore } from "@reduxjs/toolkit";

import menuReducer from './menu'
import ordersReducer from './orders'
import userReducer from './user'
import cartReducer from './cart'
import alertReducer from './alert'
import userAuthReducer from './auth'

export default configureStore({
    reducer:{
        menu: menuReducer,
        orders: ordersReducer,
        user: userReducer,
        auth: userAuthReducer,
        cart: cartReducer,
        alert: alertReducer
    }
})