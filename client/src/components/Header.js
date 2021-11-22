import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(){
    return(
        <header>
            <h3>Logo</h3>
            <ul>
                <li><Link to='/adicionar'>adicionar</Link></li>
                <li>editar</li>
            </ul>
            <i className='fas fa-cart-plus'></i>
        </header>
    )
}