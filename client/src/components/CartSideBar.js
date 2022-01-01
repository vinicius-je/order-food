import React from 'react'
import './CartSideBar.css'
import {useDispatch, useSelector}  from 'react-redux'
import { showCartSideBar } from '../redux/cart'
import CartOrderCard from './CartOrderCard'


export default function CartSideBar(){

    const {cart, orders} = useSelector(state => state);
    const dispatch = useDispatch();

    // sum total value of the orders
    const sum = (total, item) => {
        return total += item.value;
    }

    return(
        <div className={cart.show ? 'sidebar-container show-cart' : 'sidebar-container'}>
            <i className="fas fa-times close-icon" onClick={() => dispatch(showCartSideBar(false))}></i>
            <h3>My Cart</h3>
            <div className='orders-container'>
               {orders.map((item, index) => <CartOrderCard item={item} key={index}/>)}
            </div>
            <div className='cartSideBar-footer'>
                <div className='total-price'><span>Total</span><span>R$ {orders.reduce(sum, 0).toFixed(2)}</span></div>
                <button className='checkout-btn'>checkout</button>
            </div>
        </div>
    )
}