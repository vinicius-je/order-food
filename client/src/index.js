import React from 'react'
import { render } from "react-dom";
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './components/Header'

import store from './redux/store'

import Cart from './pages/cart';
import Edit from './pages/edit';
import Add from './pages/add';
import EditItem from './pages/editItem';
import Menu from './pages/menu_container';
import Login from './pages/login';
import PrivateRoute from './pages/privateRoute';


const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}></Route>
      <Route path='/' element={<PrivateRoute/>}>
        <Route path='menu' element={<Menu/>}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='add' element={<Add />}/>
        <Route path='edit' element={<Edit />}/>
        <Route path=':id' element={<EditItem/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>, 
  rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
