import React from 'react'
import './TotalPrice.css'

export default function TotalPrice(props){

    // sum total value of the orders
    const sum = (total, item) => {
        return total += item.value;
    }

    return(
        <div className='total-price'><span>Total</span><span>R$ {props.orders.reduce(sum, 0).toFixed(2)}</span></div>
    )
}