import React, { useEffect, useState } from 'react' 
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { createOrder } from '../model/orderModel'
import { getClientOrder } from '../redux/cart'
import { deleteItem } from '../redux/fetchActions'
import './Card.css'

export default function Card(props){

    const path = useLocation()
    const [editPage, setEditPage] = useState(false)

    useEffect(() => {
        path.pathname === '/edit' ? setEditPage(true) : setEditPage(false)
    }, [path])

    const index = props.index
    const {_id, name, url, description, price} = props.item


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
                <h3 className='price'>$ {price.toFixed(2)}</h3>
                {editPage === false ? <button className='order-btn btn' onClick={() => addItem({...props.item, quantity: 1})}>order</button> : 
                <div className='edit-box'>
                    <button className='btn edit-btn'>edit</button>
                    <button className='btn delete-btn' onClick={() => dispatch(deleteItem(_id))}>delete</button>
                </div>}
            </div>
        </div>
    )
}