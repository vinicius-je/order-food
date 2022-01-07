import React from 'react'
import './ButtonWithArrow.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { userLogout } from '../redux/user';

export default function ButtonWithArrow(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // clean localstorage and set user redux to an empy array
    const logout = () => {
        localStorage.removeItem('token');
        dispatch(userLogout([]));
    }

    return(
        <>
        {props.icon ==='left' ? 
            <button className='btn-with-arrow' onClick={() => navigate(`/${props.route}`)}><i class="fas fa-long-arrow-alt-left"></i> {props.value}</button> : 
            <button className='btn-with-arrow' onClick={() => {
                navigate(`/${props.route}`)
                if(props.value === 'Logout') { logout() }
            }}>{props.value} <i class="fas fa-long-arrow-alt-right"></i></button>}
        </>
    )
}