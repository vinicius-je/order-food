import React from 'react';
import { useDispatch } from 'react-redux';
import { removeClientOrder } from '../../redux/orders';
import Counter from '../Counter';
import './style.css';

const CartOrderCard = (props) => {   
    const {id, name, value, url} = props.item;
    const dispatch = useDispatch();

    return(
        <div className='order-box'>
            <img src={url} alt={name}></img>
            <div className='order-info'>
                <h3>{name}</h3>
                <h3>$ {(value).toFixed(2)}</h3>
                <Counter value={props.item}/>
            </div>
            <i className="fas fa-times remove-order" onClick={() => dispatch(removeClientOrder(id))}></i>
        </div>
    )
}

export default CartOrderCard;