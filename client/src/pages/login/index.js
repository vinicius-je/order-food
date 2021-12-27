import React, { useEffect, useState } from  'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../../redux/thunk'
import './style.css'

export default function Login(){

    const [form, setForm] = useState({email: '', password: ''});
    const dispatch = useDispatch();
    const state = useSelector(state => state.user);

    const navigate = useNavigate();

    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function onSubmit(e){
        e.preventDefault();
        dispatch(userAuth(form, true));
        setForm({email: '', password: ''});
    }


    useEffect(() => {
        if(state[0] !== undefined){ navigate('/menu') }
    }, [state, navigate])

    return(
        <div className='login-container'>
            <form onSubmit={onSubmit}>
                <h2 className='login-title'>Login</h2>
                <div className='login-input-container'>
                    <label>Email</label>
                    <input type='text' name='email' placeholder='email' minLength='3' maxLength='100' value={form.email} onChange={formChange}></input>
                </div>
                <div className='login-input-container'>
                    <label>Password</label>
                    <input type='password' name='password' placeholder='password' minLength='6' maxLength='100' value={form.password} onChange={formChange}></input>
                </div>
                <div className='login-link-container'>
                    <Link className='register-link' to='/register'>Don’t have an account? Register</Link>
                </div>
                <div className='login-btn-container'>
                    <button type='submit' className='login-btn'>Login</button>
                </div>
            </form>
        </div>
    )
}