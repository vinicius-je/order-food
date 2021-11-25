import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenuItems } from '../../redux/fetchActions';
import './style.css'

import Card from '../../components/Card'

export default function Menu(props){

    const menuItems = useSelector(state => state.menu)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMenuItems())
    }, [ dispatch ])

    useEffect(() => {
        console.log(menuItems)
    }, [ menuItems ])

    return(
        <div className='container'>
           {menuItems.map((item, index) => <Card item={item} index={index} key={index}></Card>)}
        </div>
    )
}