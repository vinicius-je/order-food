import React, { useEffect, useState } from  'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import ButtonRounded from '../../components/ButtonRounded'
import Input from '../../components/Input'
import { userAuth } from '../../redux/thunk'
import './style.css'

export default function Login(){

    const [form, setForm] = useState({email: '', password: ''});
    const state = useSelector(state => state.user);

    const dispatch = useDispatch();
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
                <Input type='text' name='email' placeholder='email' minLength='3' maxLength='100' value={form.email} formChange={formChange} label='Email'/>
                <Input type='password' name='password' placeholder='password' minLength='6' maxLength='100' value={form.password} formChange={formChange} label='password'/>
                <div className='login-link-container'>
                    <Link className='register-link' to='/register'>Don’t have an account? Register</Link>
                </div>
                <div className='login-btn-container'>
                    <ButtonRounded value='Login'/>
                </div>
            </form>
        </div>
    )
}