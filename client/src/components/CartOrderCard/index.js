import React from 'react';
import { useDispatch } from 'react-redux';
import { removeClientOrder } from '../../redux/orders';
import Counter from '../Counter';
import RemoveBtn from '../RemoveBtn';
import './style.css';

const CartOrderCard = (props) => {   
    const {id, name, value, url} = props.item;
    const dispatch = useDispatch();

    return(
        <div className='order-box'>
            <div className='order-box-header'>
                <h4 className='order-box-title'>{name}</h4>
                <RemoveBtn onClick={() => dispatch(removeClientOrder(id))}/>
            </div>
            <div className='order-box-img-container'>
                <img src={url} alt={name}></img>
            </div>
            <div className='order-info'>
                <Counter value={props.item}/>
                <h3>$ {(value).toFixed(2)}</h3>
            </div>
        </div>
    )
}

export default CartOrderCard;