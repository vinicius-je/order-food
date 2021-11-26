import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(){
    return(
        <header>
            <h3>Logo</h3>
            <ul>
                <li><Link to='/'>menu</Link></li>
                <li><Link to='/adicionar'>adicionar</Link></li>
                <li>editar</li>
            </ul>
            <Link to='/cart'><i className='fas fa-cart-plus'></i></Link>
        </header>
    )
}