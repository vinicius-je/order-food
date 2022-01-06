import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutCads from '../../components/CheckoutCards'
import './style.css'
import TotalPrice from '../../components/TotalPrice'
import CheckoutForm from '../../components/CheckoutForm'


export default function Checkout(){
    const state = useSelector(state => state.orders)
    return(
        <div className='checkout-container'>
            <div className='checkout-box-1'>
                <button className='checkout-cancel-btn'><i class="fas fa-long-arrow-alt-left"></i> Cancel</button>
                <div className='checkout-orders-container'>
                    {state.map((item, index) => <CheckoutCads key={index} item={item}/>)}
                </div>
                <TotalPrice orders={state}/>
            </div>
            <div className='checkout-box-2'>
                <CheckoutForm/>
            </div>
        </div>
    )
}