import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutCads from '../../components/CheckoutCads';
import './style.css';
import TotalPrice from '../../components/TotalPrice';
import CheckoutForm from '../../components/CheckoutForm';
import { useNavigate } from 'react-router';

const Checkout = () => {
    const state = useSelector(state => state.orders);
    const navigate = useNavigate();

    return(
        <div className='checkout-container'>
            <div className='checkout-box-1'>
                <button className='cancel-btn' onClick={() => navigate('/menu')}>Cancel</button>
                <div className='checkout-orders-container'>
                    {state.map((item, index) => <CheckoutCads key={index} item={item}/>)}
                </div>
                <TotalPrice orders={state}/>
            </div>
            <div className='checkout-box-2'>
                <CheckoutForm/>
            </div>
        </div>
    )
}

export default Checkout;