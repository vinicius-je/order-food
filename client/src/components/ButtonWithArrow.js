import React from 'react'
import './ButtonWithArrow.css'
import { useNavigate } from 'react-router-dom'

export default function ButtonWithArrow(props){
    const navigate = useNavigate();

    return(
        <>
        {props.icon ==='left' ? 
            <button className='btn-with-arrow' onClick={() => navigate(`/${props.route}`)}><i class="fas fa-long-arrow-alt-left"></i> {props.value}</button> : 
            <button className='btn-with-arrow' onClick={() => navigate(`/${props.route}`)}>{props.value}<i class="fas fa-long-arrow-alt-right"></i></button>}
        </>
    )
}