import React from 'react'
import { render } from "react-dom";
// import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Adicionar from './pages/adicionar/Adicionar'
import Header from './components/Header'

import store from './redux/store'
import Cart from './pages/cart/Cart';

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/adicionar' element={<Adicionar />}></Route>
    </Routes>
  </BrowserRouter>
  </Provider>, 
  rootElement);


// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
