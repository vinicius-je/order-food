import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { userLogout } from '../redux/user'
import CartSideBar from './CartSideBar'
import { toggleCartSideBar } from '../redux/cart'
import './Header.css'

export default function Header(){

    const orders = useSelector(state => state.orders);

    const dispatch = useDispatch();

    const displayOrderQuantity = (total, item) => {
        return total += item.quantity;
    }
    // clean localstorage and set user redux to empy array
    const logout = () => {
        localStorage.removeItem('token');
        dispatch(userLogout([]));
    }

    return(
        <>
        <header>
            <h3>Logo</h3>
            <ul>
                <li><Link to='menu'>menu</Link></li>
                <li><Link to='add'>adicionar</Link></li>
                <li><Link to='edit'>editar</Link></li>
                <li><Link onClick={logout} to='/'>sair</Link></li>
            </ul>
            <div className='cart-icon-box'>
                <div className='counter-circle'>{orders.reduce(displayOrderQuantity, 0)}</div>
                <i className='fas fa-cart-plus' onClick={() => dispatch(toggleCartSideBar())}></i>
            </div>
            <CartSideBar/>
        </header>
        <Outlet/>
        </>
    )
}