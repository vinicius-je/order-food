import React from 'react'
import { render } from "react-dom"
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'

import Cart from './pages/cart'
import Edit from './pages/edit'
import Add from './pages/add'
import EditItem from './pages/editItem'
import Menu from './pages/menu_container'
import Login from './pages/login'
import PrivateRoute from './routes/privateRoute'
import AdminRoute from './routes/adminRoute'
import Register from './pages/register'


const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='' element={<PrivateRoute/>}>
        <Route path='menu' element={<Menu/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='' element={<AdminRoute/>}>
          <Route path='add' element={<Add/>}/>
          <Route path='edit' element={<Edit/>}/>
          <Route path=':id' element={<EditItem/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>, 
  rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
