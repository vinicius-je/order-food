import React from 'react';
import './style.css';

const TotalPrice = (props) => {
    // sum total value of the orders
    const sum = (total, item) => {
        return total += item.value;
    }

    return(
        <div className='total-price'><span>Total</span><span>R$ {props.orders.reduce(sum, 0).toFixed(2)}</span></div>
    )
}

export default TotalPrice;