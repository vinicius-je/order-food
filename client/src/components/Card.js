import React from 'react' 
import './Card.css'

export default function Card(props){

    const index = props.index
    const {id, name, url, description, price} = props.item

    return(
        <div className='card-container'>
            <div className='card'>
                <h4 className='number'>Nº{index + 1}</h4>
                <img src={url} alt={name}></img>
                <h3 className='name'>{name}</h3>
                <p className='description'>{description}</p>
                <h3 className='price'>$ {price}</h3>
                <button className='order-btn'>order</button>
            </div>
        </div>
    )
}