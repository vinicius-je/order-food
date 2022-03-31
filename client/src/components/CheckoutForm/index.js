import React, { useState } from 'react'
import Input from '../Input/index'
import './style.css'
import ButtonRounded from '../ButtonRounded'
import { useNavigate } from 'react-router'

const CheckoutForm = () => {

    const [userData, setUserData] = useState({street: '',number: '', district: '', card_number: '', expiration_date: '', cvv: ''});
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const formChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
 
        paymentCheckout({card_number: userData.card_number});
        setUserData({street: '',number: '', district: '', card_number: '', expiration_date: '', cvv: ''});
    }

    const paymentCheckout = (data) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }
        fetch('/payment', options)
            .then(res => res.json())
            .then(data => {
                if(data.payment) { 
                    // alert('Payment approved')
                    navigate('/success')
                }
            })
            .catch((error) => alert('Payment not approved'))
    }

    return(
        <div className='checkout-form-container'>
             <form onSubmit={onSubmit}>
                <h3>Adress</h3>
                <div className='checkout-form-input-container checkout-form-input-flex'>
                    <Input type='text' name='street' placeholder='Street' value={userData.street} formChange={formChange}/>
                    <Input type='number' name='number' placeholder='Nº' step='1' min='0' value={userData.number} formChange={formChange}/>
                </div>
                <div className='checkout-form-input-container'>
                    <Input type='text' name='district' placeholder='District' value={userData.district} formChange={formChange}/>
                </div>
                <h3>Payment</h3>
                <div className='checkout-form-input-container'>
                    <Input type='text' name='card_number' label='Credit card details' placeholder='1010 1010 1010 1010' pattern='[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}' value={userData.card_number} formChange={formChange}/>
                </div>
                <div className='checkout-form-input-container checkout-form-input-flex'>
                    <Input type='text' name='expiration_date' placeholder='MM/YY' pattern='[01-12]{2}/[01-31]{2}' value={userData.expiration_date} formChange={formChange}/>
                    <Input type='text' name='cvv' placeholder='CVV' pattern='[0-9]{1}[0-9]{1}[0-9]{1}' value={userData.cvv} formChange={formChange}/>
                </div>
                <div className='checkout-form-btn-container'>
                    <ButtonRounded value='Buy'/>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;