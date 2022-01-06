import React from 'react'
import './Input.css'

export default function Input(props){
    const {type, name, placeholder, minLength, maxLength, value, formChange, max, min, label, step, pattern} = props;

    return(
        <div className="input-container">
            <label>{label}</label>
            <input type={type} name={name} placeholder={placeholder} minLength={minLength} maxLength={maxLength} onChange={formChange} value={value} max={max} min={min} step={step} pattern={pattern} required></input>
        </div>
    )
}