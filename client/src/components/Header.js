import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { userLogout } from '../redux/user'
import './Header.css'

export default function Header(){

    const items = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const displayOrderQuantity = (total, item) => {
        return total += item.quantity;
    }

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
                <div className='counter-circle'>{items.reduce(displayOrderQuantity, 0)}</div>
                <Link to='/cart'><i className='fas fa-cart-plus'></i></Link>
            </div>
        </header>
        <Outlet/>
        </>
    )
}