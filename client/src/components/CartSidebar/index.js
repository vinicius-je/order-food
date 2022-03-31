import React from 'react';
import './style.css';
import {useDispatch, useSelector}  from 'react-redux';
import CartOrderCard from '../CartOrderCard';
import { useNavigate } from 'react-router-dom';
import TotalPrice from '../TotalPrice';
import { toggleCartSideBar } from '../../redux/cart';

const CartSidebar = () => {
    const {cart, orders} = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <div className={cart.show ? 'sidebar-container show-cart' : 'sidebar-container'}>
            <i className="fas fa-times close-icon" onClick={() => dispatch(toggleCartSideBar())}></i>
            <h3>My Cart</h3>
            <div className='orders-container'>
               {orders.map((item, index) => <CartOrderCard item={item} key={index}/>)}
            </div>
            <div className='cartSideBar-footer'>
                <TotalPrice orders={orders}/>
                <button className='checkout-btn' onClick={() => { 
                    navigate('/checkout'); 
                    // close cart sidebar
                    dispatch(toggleCartSideBar());
                }}>checkout</button>
            </div>
        </div>
    )
}

export default CartSidebar;