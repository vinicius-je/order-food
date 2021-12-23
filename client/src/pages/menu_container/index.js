import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenuItems } from '../../redux/thunk'
import './style.css'

import Card from '../../components/Card'

export default function Menu(){
    const menuItems = useSelector(state => state.menu);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenuItems());
    }, [])

    return(
        <div className='container'>
           {menuItems.map((item, index) => <Card item={item} index={index} key={index}></Card>)}
        </div>
    )
}