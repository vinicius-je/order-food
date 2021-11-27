import React from 'react'
import { useDispatch } from 'react-redux'
import './OrderCard.css'
import { decrement, increment, removeClientOrder } from '../redux/cart'

export default function OrderCard(props){

    const {id, name, price, quantity, url} = props.item
    const dispatch = useDispatch()

    const removeOrder = (id) => {
        dispatch(removeClientOrder(id))
    }

    return(
        <div className='order-container'>
            <i className="fas fa-times" onClick={() => removeOrder(id)}></i>
            <img src={url} alt={name}></img>
            <div className='bar'>
                <span>{name}</span>
                <span>$ {(price).toFixed(2)}</span>
                <div className='counter'>
                    <button onClick={() => dispatch(decrement(id))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => dispatch(increment(id))}>+</button>
                </div>
            </div>
        </div>
    )
}