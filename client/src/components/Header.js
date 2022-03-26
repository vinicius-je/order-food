import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { userLogout } from '../redux/user'
import CartSideBar from './CartSideBar'
import { toggleCartSideBar } from '../redux/cart'
import './Header.css'
import { userAuth } from '../redux/auth'

export default function Header(props){

    const orders = useSelector(state => state.orders);

    const [menuSideBar, setMenuSideBar] = useState(false)

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

    useEffect(() => {
        // get all links btn and and onclick to close menu sidebar
        let links = document.querySelectorAll('.link-btn');
        links.forEach(link => { link.onclick = () => setMenuSideBar(!menuSideBar)});
    }, [menuSideBar]) 

    return(
        <>
        <header className='header'>
            <h3 className='logo'>Logo</h3>
            <ul className={menuSideBar ? 'navLinks navLinks-active' : 'navLinks'}>
                <i class="fas fa-times close-menu-sidebar" onClick={() => setMenuSideBar(!menuSideBar)}></i>
                <Link to='menu'><li className='link-btn'>menu</li></Link>
                <Link to='add'><li className='link-btn'>add</li></Link>
                <Link to='edit'><li className='link-btn'>edit</li></Link>
                <Link to='/' onClick={logout}><li className='link-btn'>logout</li></Link>
            </ul>
            <div className='cart-icon-box'>
                <div className='counter-circle'>{orders.reduce(displayOrderQuantity, 0)}</div>
                <i className='fas fa-cart-plus' onClick={() => dispatch(toggleCartSideBar())}></i>
            </div>
            <div className='menu-bg-icon' onClick={() => setMenuSideBar(!menuSideBar)}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <CartSideBar/>
        </header>
        <Outlet/>
        </>
    )
}