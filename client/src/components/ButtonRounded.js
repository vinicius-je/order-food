import React from 'react'
import './ButtonRounded.css'

export default function ButtonRounded(props){
    return(
        <button className='btn-rounded' type='submit'>{props.value}</button>
    )
}