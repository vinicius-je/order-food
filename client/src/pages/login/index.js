import React, { useEffect, useState } from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import RectangleButton from '../../components/RectangleButton';
import Title from '../../components/Title';
import { auth } from '../../redux/thunk';
import './style.css';

const Login = () => {

    const [form, setForm] = useState({email: '', password: ''});
    const state = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // set form data based in input name
    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }
    // send data to backend
    function onSubmit(e){
        e.preventDefault();
        dispatch(auth(form, true));
        setForm({email: '', password: ''});
    }

    useEffect(() => {
        if(state.auth){ navigate('/menu'); }
    }, [state])

    return(
        <div className='login-container'>
            <form onSubmit={onSubmit}>
                <Title/>
                <p className='sub-title-login'>Login</p>
                <Input type='text' name='email' placeholder='Email' minLength='3' maxLength='100' value={form.email} formChange={formChange} label='Email'/>
                <Input type='password' name='password' placeholder='Password' minLength='6' maxLength='100' value={form.password} formChange={formChange} label='Password'/>
                <div className='login-link-container'>
                    <Link className='register-link' to='/register'>Don’t have an account? Register</Link>
                </div>
                <RectangleButton value="Login"/>
            </form>
        </div>
    )
}

export default Login;