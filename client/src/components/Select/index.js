import React from "react";
import './style.css'

const Select = (props) => {
    const {placeholder, values, onChange} = props;

    return(
        <div className='select-container'>
            <select className='select' name={placeholder.toLowerCase()} onChange={onChange}>
                <option disabled selected>{placeholder}</option>
                {values.map((value, index) => (
                    <option value={value} key={index}>{value}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;