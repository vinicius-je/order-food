import React from 'react' 
import { useSelector } from 'react-redux'
import OrderCard from '../../components/OrderCard'
import './style.css'

export default function Cart(){

    const items = useSelector(state => state.cart);

    const sum = (total, item) =>{
        return total += item.value
    }

    return(
        <div className='cart-container'>
            <h3>Your orders</h3>
            <div className='wrapper-orders'>
                {items.length !== 0 ? items.map((item, index) => <OrderCard key={index} item={item}/>) : <></>}
            </div>
            <div className='price-box'>
                <div className='total'>
                    <h3>Total</h3>
                    <h3>${items.reduce(sum, 0).toFixed(2)}</h3>
                </div>
                <button>checkout</button>
            </div>
        </div>
    )
}