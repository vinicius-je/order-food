import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './style.css'
import { userRegister } from '../../redux/fetchActions'
import { useNavigate } from 'react-router'

export default function Register(){
    const [form, setForm] = useState({email: '', password: ''})
    const [confirmPwd, setConfirmPwd] = useState('')

    const state = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(state)
        if(state[0] !== undefined){
            navigate('/menu')
        }
    }, [state])

    function formChange(e){
        if (e.target.name === 'confirm-pwd'){
            setConfirmPwd(e.target.value)
        }else{
            setForm({...form, [e.target.name]: e.target.value})
        }
    }

    function onSubmit(e){
        e.preventDefault()

        if(confirmPwd === form.password){
            dispatch(userRegister(form))
        }else{
            alert("password don't match, try again")
        }

        setForm({email: '', password: ''})
        setConfirmPwd('')
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <div className='input-container'>
                    <label>Email</label>
                    <input type='text' name='email' placeholder='Email' value={form.email} onChange={formChange}></input>
                </div>
                <div className='input-container'>
                    <label>Password</label>
                    <input type='password' name='password' placeholder='Password' value={form.password} onChange={formChange}></input>
                </div>
                <div className='input-container'>
                    <label>Confirm Password</label>
                    <input type='password' name='confirm-pwd' placeholder='Confirm Password' value={confirmPwd} onChange={formChange}></input>
                </div>
                <div className='register-btn-container'>
                    <button type='submit' className='register-btn'>Register</button>
                </div>
            </form>
        </>
    )
}