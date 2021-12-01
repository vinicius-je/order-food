import React, { useState } from 'react' 
import { useDispatch } from 'react-redux'
import { postNewMenuItem } from '../../redux/fetchActions';
import './style.css'

export default function Add(){

    const [form, setForm] = useState({url: '', name: '', description: '', price: 0})
    const dispatch = useDispatch()

    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function onSubmit(e){
        e.preventDefault();
        console.log(form);

        dispatch(postNewMenuItem(form))
        setForm({url: '', name: '', description: '', price: 0})
    }

    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='input-container'>
                <label>Image Url</label>
                <input name='url' placeholder='Image URL' value={form.url} onChange={formChange} required></input>
            </div>
            <div className='input-container'>
                <label>Name</label>
                <input name='name' placeholder='Food name' value={form.name} onChange={formChange} minLength='3' maxLength='30' required></input>
            </div>
            <div className='input-container'>
                <label>Description</label>
                <input name='description' placeholder='Description' value={form.description} onChange={formChange} minLength='3' maxLength='100' required></input>
            </div>
            <div className='input-container'>
                <label>Price</label>
                <input type='number' name='price' placeholder='Price' max='100' min='0' step='any' value={form.price} onChange={formChange} required></input>
            </div>
            <button type="submit" className='btn'>OK</button>
        </form>
    )
}