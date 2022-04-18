import React, { useEffect, useState } from 'react'
import Input from '../Input/index'
import './style.css'
import { useNavigate } from 'react-router'
import Select from '../Select'
import RectangleButton from '../RectangleButton'

const CheckoutForm = () => {
    const [userData, setUserData] = useState({street: '',number: '', district: '', card_number: '', year: '', month: '', cvv: ''});
    const [years, setYears] = useState([]);
    const [months, setMonths] = useState([]);
    // const months = [{name: 1, value: 1}, ];
    const navigate = useNavigate();

    const formChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let year = years[0];
        let month = new Date().getMonth() + 1;
        
        if (new Date(year, month) <= new Date(userData.year, userData.month)){
            console.log('sim');
            // paymentCheckout({card_number: userData.card_number});
        }else{
            alert('Your credit card is expired');
        }
    }

    const paymentCheckout = (data) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }
        fetch('/payment', options)
            .then(res => {
                if(res.ok){
                    setUserData({street: '', number: '', district: '', card_number: '', year: '', month: '', cvv: ''});
                    navigate('/success');
                }
            })
            .catch((error) => alert('Payment not approved'))
    }

    useEffect(() => {
        let year = new Date().getFullYear();
        for(let i = 0; i < 8; i++){
            setYears((state) => [...state, {"value": year + 1, "name": year + i}]);
        }
        for(let j = 1; j < 13 ; j++){
            setMonths((state) => [...state, {"value": j - 1, "name": j}]);
        }
    }, [])

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
                    <div className='checkout-form-flex-box'>
                       <Select placeholder='Year' values={years} onChange={formChange}/>
                    </div>
                    <div className='checkout-form-flex-box'>
                        <Select placeholder='Month' values={months} onChange={formChange}/>
                    </div>
                    <div className='checkout-form-flex-box'>
                        <Input type='text' name='cvv' placeholder='CVV' pattern='[0-9]{1}[0-9]{1}[0-9]{1}' value={userData.cvv} formChange={formChange}/>
                    </div>
                </div>
                <div className='checkout-form-btn-container'>
                    <RectangleButton value='Buy'/>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;