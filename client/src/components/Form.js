import React from 'react'
import ButtonRounded from './ButtonRounded';
import './Form.css'
import Input from './Input';

export default function Form(props){
    const {onSubmit, form, formChange, btn_value} = props;

    return(
        <form className='form-container' onSubmit={onSubmit}>
            <Input type='text' name='url' placeholder='Image URL' value={form.url} formChange={formChange} minLength='300' maxLength='300' label='Image URL'/>
            <Input type='text' name='name' placeholder='Food name' value={form.name} formChange={formChange} minLength='3' maxLength='30' label='Food Name'/>
            <Input type='text' name='description' placeholder='Description' value={form.description} formChange={formChange} minLength='3' maxLength='100' label='Description'/>
            <Input type='number' name='price' placeholder='Price' max='100' min='0' step='any' value={form.price} formChange={formChange} label='Price'/>
            <ButtonRounded value={btn_value}/>
        </form>
    )
}