import React, { useEffect, useState } from 'react'
import ButtonWithArrow from '../../components/ButtonWithArrow'
import './style.css'
import successSVG from '../../icon/successSVG.svg'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllClientOrders } from '../../redux/orders'

export default function Success(){

    const state = useSelector(state => state.orders);
    const [time, setTime] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        setTime(state.length * 15);
        // clean the orders of the client from state
        dispatch(removeAllClientOrders());
    }, [])

    return(
        <>
            <header className='Success-header'>
                <ButtonWithArrow value='Menu' icon='left' route='menu'/>
                <ButtonWithArrow value='Logout' icon='right' route=''/>
            </header>
            <div className='Success-rectangle'>
                <img src={successSVG} alt='svg'></img>
                <h3>Payment approved</h3>
                <h3>Your orders will be prepared and delivered in {time} minutes</h3>
            </div>
        </>
    )
}