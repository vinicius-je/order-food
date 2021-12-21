import React from 'react'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router'
import jwt_decode from 'jwt-decode'

export default function AdminRoute(){

    const token = JSON.parse(localStorage.getItem('token'));
    const user = jwt_decode(token.token);

    return(
        <>  
            {user.admin ? <Outlet/> : <Navigate to='/'/>}
        </>
    )
}

