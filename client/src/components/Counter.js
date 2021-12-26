import React from 'react'
import { useDispatch } from 'react-redux'
import './Counter.css'
import { decrement, increment } from '../redux/orders'

export default function Counter(props){
    
    const {id, quantity} = props.value;
    const dispatch = useDispatch();

    return(
        <div className='counter'>
            <button className='counter-btn' onClick={() => dispatch(decrement(id))}>-</button>
            <span className='counter-display'>{quantity}</span>
            <button className='counter-btn' onClick={() => dispatch(increment(id))}>+</button>
        </div>
    )
}