import React from 'react'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router'
import jwt_decode from 'jwt-decode'

export default function AdminRoute(){

    const token = JSON.parse(localStorage.getItem('token'));
    const user = token !== null ? jwt_decode(token.token) : false;

    return(
        <>  
            {user.admin ? <Outlet/> : <Navigate to='/'/>}
        </>
    )
}

