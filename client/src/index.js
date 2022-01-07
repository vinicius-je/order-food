import React from 'react'
import { render } from "react-dom"
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'

import Header  from './components/Header'
import Edit from './pages/edit'
import Add from './pages/add'
import EditItem from './pages/editItem'
import Menu from './pages/menu_container'
import Login from './pages/login'
import PrivateRoute from './routes/privateRoute'
import AdminRoute from './routes/adminRoute'
import Register from './pages/register'
import Checkout from './pages/checkout'
import Success from './pages/success'


const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<PrivateRoute/>}>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='' element={<Header/>}>
          <Route path='menu' element={<Menu/>}/>
          <Route path='/' element={<AdminRoute/>}>
            <Route path='add' element={<Add/>}/>
            <Route path='edit' element={<Edit/>}/>
            <Route path=':id' element={<EditItem/>}/>
          </Route>
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
