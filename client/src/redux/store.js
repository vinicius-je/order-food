import { configureStore } from "@reduxjs/toolkit";

import menuReducer from '../redux/menu'

export default configureStore({
    reducer:{
        menu: menuReducer
    }
})