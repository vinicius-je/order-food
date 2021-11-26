import React from 'react'
import './OrderCard.css'

export default function OrderCard(props){

    const {name, price, quantity, url} = props.item

    return(
        <div className='order-container'>
            <i className="fas fa-times"></i>
            <img src={url} alt={name}></img>
            <div className='bar'>
                <span>{name}</span>
                <span>$ {price * quantity}</span>
                <div className='counter'>
                    <button>-</button>
                    <span>{quantity}</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}