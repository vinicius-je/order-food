import React from 'react'
import Counter from './Counter'
import './CheckoutCads.css'

export default function CheckoutCads(props){

    const {name, value, url} = props.item
    return(
        <div className='checkout-cards-container'>
            <img src={url} alt={name}></img>
            <h3>{name}</h3>
            <Counter value={props.item}/>
            <h3>$ {(value).toFixed(2)}</h3>
        </div>
    )
}