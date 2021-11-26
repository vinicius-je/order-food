import React from 'react' 
import { useDispatch } from 'react-redux'
import { createOrder } from '../model/orderModel'
import { getClientOrder } from '../redux/cart'
import './Card.css'

export default function Card(props){

    const index = props.index
    const {name, url, description, price} = props.item

    const dispatch = useDispatch()

    const addItem = (item) =>{
        const {_id, name, url, price, quantity} = item
        const order = createOrder(_id, name, url, price, quantity)
        dispatch(getClientOrder(order))
    }

    return(
        <div className='card-container'>
            <div className='card'>
                <h4 className='number'>Nº{index + 1}</h4>
                <img src={url} alt={name}></img>
                <h3 className='name'>{name}</h3>
                <p className='description'>{description}</p>
                <h3 className='price'>$ {price}</h3>
                <button className='order-btn' onClick={() => addItem({...props.item, quantity: 2})}>order</button>
            </div>
        </div>
    )
}