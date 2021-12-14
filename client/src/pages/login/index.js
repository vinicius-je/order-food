import React, { useState } from  'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogin } from '../../redux/fetchActions'
import './style.css'

export default function Login(){

    const [form, setForm] = useState({email: '', password: ''})
    const dispatch = useDispatch()

    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value})
        console.log(form)
    }

    function onSubmit(e){
        e.preventDefault();

        try {
           dispatch(userLogin(form))
        } catch (error) {
            console.log(error)   
        }
        setForm({email: '', password: ''})
    }

    return(
        <div className='login-container'>
            <form onSubmit={onSubmit}>
                <div className='input-container'>
                    <label>Email</label>
                    <input type='text' name='email' placeholder='email' minLength='3' maxLength='100' value={form.email} onChange={formChange}></input>
                </div>
                <div className='input-container'>
                    <label>Password</label>
                    <input type='password' name='password' placeholder='password' minLength='6' maxLength='100' value={form.password} onChange={formChange}></input>
                </div>
                <div className='login-btn-container'>
                    <button type='submit' className='login-btn'>Login</button>
                </div>
                <Link to='/register'>Register</Link>
            </form>
        </div>
    )
}