import React from 'react'
import './style.css'

export default function Alert(props){
    return(
        <h4 className='alert'>{props.value}</h4>
    )
}