import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { userLogin } from '../../redux/user'

export default function PrivateRoute({children}){
    const dispatch = useDispatch();

    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        if(token !== null){ dispatch(userLogin(token)); }
    }, [])

    
    return (
        <>  
            {token !== null ? <Outlet/> : <Navigate to='/'/>}
        </>
    )
        
}