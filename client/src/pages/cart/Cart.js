import React from 'react' 
import OrderCard from '../../components/OrderCard'
import './style.css'

export default function Cart(){
    return(
        <div className='cart-container'>
            <h3>Your orders</h3>
            <div className='wrapper-orders'>
                <OrderCard/>
            </div>
            <div className='price-box'>
                <div className='total'>
                    <h3>Total</h3>
                    <h3>$ 9.99</h3>
                </div>
                <button>checkout</button>
            </div>
        </div>
    )
}