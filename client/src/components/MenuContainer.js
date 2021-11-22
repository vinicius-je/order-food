import React, { useEffect } from 'react';
import { getMenuItems } from '../redux/fetchActions';
import './MenuContainer.css'

export default function Menu(props){

    useEffect(() => {
        getMenuItems()
    }, [])

    return(
        <div className='container'>
            <div className='card-container'>
                <div className='card'>
                    <h4 className='number'>Nº1</h4>
                    <img src='https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='teste'></img>
                    <h3 className='name'>Desc</h3>
                    <p className='description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <h3 className='price'>$ 8.99</h3>
                    <button className='order-btn'>order</button>
                </div>
            </div>

            <div className='card-container'>
                <div className='card'>
                    <h4 className='number'>Nº1</h4>
                    <img src='https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='teste'></img>
                    <h3 className='name'>Desc</h3>
                    <p className='description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <h3 className='price'>$ 8.99</h3>
                    <button className='order-btn'>order</button>
                </div>
            </div>

            <div className='card-container'>
                <div className='card'>
                    <h4 className='number'>Nº1</h4>
                    <img src='https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='teste'></img>
                    <h3 className='name'>Desc</h3>
                    <p className='description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <h3 className='price'>$ 8.99</h3>
                    <button className='order-btn'>order</button>
                </div>
            </div>

            <div className='card-container'>
                <div className='card'>
                    <h4 className='number'>Nº1</h4>
                    <img src='https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='teste'></img>
                    <h3 className='name'>Desc</h3>
                    <p className='description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <h3 className='price'>$ 8.99</h3>
                    <button className='order-btn'>order</button>
                </div>
            </div>
        </div>
    )
}