import React from 'react'
import Input from './Input'
import './CheckoutForm.css'
import ButtonRounded from './ButtonRounded'

export default function CheckoutForm(){
    return(
        <div className='checkout-form-container'>
             <form>
                <h3>Adress</h3>
                <div className='checkout-form-input-container checkout-form-input-flex'>
                    <Input type='text' name='street' placeholder='Street'/>
                    <Input type='number' name='number' placeholder='Nº' step='1' min='0'/>
                </div>
                <div className='checkout-form-input-container'>
                    <Input type='text' name='street' placeholder='District'/>
                </div>
                <h3>Payment</h3>
                <div className='checkout-form-input-container'>
                    <Input type='text' name='credit_card_number' label='Credit card details' placeholder='1234 1234 1234 1234' pattern='[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}'/>
                </div>
                <div className='checkout-form-input-container checkout-form-input-flex'>
                    <Input type='text' name='expiration_date' placeholder='MM/AA'/>
                    <Input type='number' name='cvv' placeholder='CVV' pattern='[0-9]{3}'/>
                </div>
                <div className='checkout-form-btn-container'>
                    <ButtonRounded value='Buy'/>
                </div>
            </form>
        </div>
    )
}