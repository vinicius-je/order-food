import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './style.css'
import { useNavigate } from 'react-router'
import { userAuth } from '../../redux/thunk'
import Input from '../../components/Input'
import ButtonRounded from '../../components/ButtonRounded'

export default function Register(){
    const [form, setForm] = useState({email: '', password: ''});
    const [confirmPwd, setConfirmPwd] = useState('');
    const state = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // if there is data in user state, redirect to menu
    useEffect(() => {
        if(state[0] !== undefined){
            navigate('/menu');
        }
    }, [state])
    // set form data based in input name
    function formChange(e){
        if (e.target.name === 'confirm-pwd'){
            setConfirmPwd(e.target.value);
        }else{
            setForm({...form, [e.target.name]: e.target.value});
        }
    }
    // check password and send data to backend
    function onSubmit(e){
        e.preventDefault();

        if(confirmPwd === form.password){
            dispatch(userAuth(form, false));
        }else{
            alert("password don't match, try again");
        }

        setForm({email: '', password: ''})
        setConfirmPwd('')
    }

    return(
        <div className='register-container'>
            <form onSubmit={onSubmit}>
                <h2 className='register-title'>Register</h2>
                <Input type='text' name='email' placeholder='Email' value={form.email} formChange={formChange} label='Email'/>
                <Input type='password' name='password' placeholder='Password' value={form.password} formChange={formChange} minLength='6' label='Password'/>
                <Input type='password' name='confirm-pwd' placeholder='Confirm Password' value={confirmPwd} formChange={formChange} minLength='6' label='Confirm Password'/>
                <div className='register-btn-container'>
                    <ButtonRounded value='Register'/>
                </div>
            </form>
        </div>
    )
}