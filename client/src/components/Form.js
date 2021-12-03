import React from 'react'
import './Form.css'

export default function Form(props){
    const {onSubmit, form, formChange} = props;

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