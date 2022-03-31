import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonRounded from '../ButtonRounded';
import './style.css';
import Input from '../Input/index';

const Form = (props) => {
    const {form, setForm, callback, btnValue} = props;
    const dispatch = useDispatch();

    // send data to backend
    function onSubmit(e){
        e.preventDefault();
        dispatch(callback(form));
        setForm({url: '', name: '', description: '', price: 0});
    }
    // set form data based in input name
    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    return(
        <form className='form-container' onSubmit={onSubmit}>
            <Input type='text' name='url' placeholder='Image URL' value={form.url} formChange={formChange} minLength='1' maxLength='300' label='Image URL'/>
            <Input type='text' name='name' placeholder='Food name' value={form.name} formChange={formChange} minLength='3' maxLength='30' label='Food Name'/>
            <Input type='text' name='description' placeholder='Description' value={form.description} formChange={formChange} minLength='3' maxLength='100' label='Description'/>
            <Input type='number' name='price' placeholder='Price' max='100' min='0' step='any' value={form.price} formChange={formChange} label='Price'/>
            <ButtonRounded value={btnValue}/>
        </form>
    )
}

export default Form;