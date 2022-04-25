import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { userAuth } from '../../redux/auth'
import { userData } from '../../redux/user'

export default function PrivateRoute(){
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        if(token !== null){ 
            dispatch(userData(token)); 
            dispatch(userAuth(true));
        }
    }, [])

    return (
        <>  
            {auth ? <Outlet/> : <Navigate to='/'/>}
        </>
    )
        
}