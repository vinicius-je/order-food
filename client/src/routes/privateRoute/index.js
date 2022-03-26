import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { userData } from '../../redux/user'

export default function PrivateRoute(){
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        if(token !== null){ dispatch(userData(token)); }
    }, [])

    
    return (
        <>  
            {token !== null ? <Outlet/> : <Navigate to='/'/>}
        </>
    )
        
}