import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { userLogout } from '../../redux/user';
import CartSidebar from '../CartSidebar';
import { toggleCartSideBar } from '../../redux/cart';
import './style.css';
import { userAuth } from '../../redux/auth';
import Title from '../Title';

const Header = (props) => {

    const orders = useSelector(state => state.orders);

    const dispatch = useDispatch();
    // display quantity of the orders in cart icon
    const displayOrderQuantity = (total, item) => {
        return total += item.quantity;
    }
    // clean localstorage and set user redux to an empy array
    const logout = () => {
        localStorage.removeItem('token');
        dispatch(userAuth(false))
        dispatch(userLogout([]));
    }

    return(
        <>
        <header className='header'>
            <Title/>
            <div className='header-navlinks'>
                <ul className='navLinks'>
                    <Link to='menu'><li className='link-btn'>menu</li></Link>
                    <Link to='add'><li className='link-btn'>add</li></Link>
                    <Link to='edit'><li className='link-btn'>edit</li></Link>
                    <Link to='/' onClick={logout}><li className='link-btn'>logout</li></Link>
                </ul>
            </div>
            <div className='cart-icon-box'>
                <div className='cart-icon'>
                    <div className='counter-circle'>{orders.reduce(displayOrderQuantity, 0)}</div>
                    <i className='fas fa-cart-plus' onClick={() => dispatch(toggleCartSideBar())}></i>
                </div>
            </div>
            <CartSidebar/>
        </header>
        <Outlet/>
        </>
    )
}

export default Header;