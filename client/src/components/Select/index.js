import React from "react";
import './style.css'

const Select = (props) => {
    const {placeholder, values, onChange} = props;
    console.log(values)
    return(
        <div className='select-container'>
            <select className='select' name={placeholder.toLowerCase()} onChange={onChange}>
                <option disabled selected>{placeholder}</option>
                {values.map((option, index) => (
                    <option value={option.value} key={index}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;