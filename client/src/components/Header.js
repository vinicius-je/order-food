import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(){

    const items = useSelector(state => state.cart)

    const displayOrderQuantity = (total, item) => {
        return total += item.quantity
    }

    return(
        <header>
            <h3>Logo</h3>
            <ul>
                <li><Link to='/'>menu</Link></li>
                <li><Link to='/add'>adicionar</Link></li>
                <li><Link to='/edit'>editar</Link></li>
            </ul>
            <div className='cart-icon-box'>
                <div className='counter-circle'>{items.reduce(displayOrderQuantity, 0)}</div>
                <Link to='/cart'><i className='fas fa-cart-plus'></i></Link>
            </div>
        </header>
    )
}