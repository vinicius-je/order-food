import React from 'react';
import { useDispatch } from 'react-redux';
import { removeClientOrder } from '../../redux/orders';
import Counter from '../Counter';
import RemoveBtn from '../RemoveBtn';
import './style.css';

const CheckoutCads = (props) => {
    const {name, value, url, id} = props.item;
    const dispath = useDispatch();

    return(
        <div className='checkout-cards-container'>
            <div className='checkout-card-box-img'>
                <img src={url} alt={name}></img>
            </div>
            <div className='checkout-card-box'>
                <h3>{name}</h3>
            </div>
            <div className='checkout-card-box'>
                <Counter value={props.item}/>
            </div>
            <div className='checkout-card-box'>
                <h3>$ {(value).toFixed(2)}</h3>
            </div>
            <div className='checkout-cards-remove-order'>
                <RemoveBtn onClick={() => dispath(removeClientOrder(id))}/>
            </div>
        </div>
    )
}

export default CheckoutCads;