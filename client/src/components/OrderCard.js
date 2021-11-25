import React from 'react'
import './OrderCard.css'

export default function OrderCard(){
    return(
        <div className='order-container'>
            <i class="fas fa-times"></i>
            <img src='https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
            <div className='bar'>
                <span>food</span>
                <span>$ 9.99</span>
                <div className='counter'>
                    <button>-</button>
                    <span>10</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}