import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router'
import { userLogin } from '../../redux/user'
import jwt from 'jsonwebtoken'

export default function AdminRoute(){

    const [admin, setAdmin] = useState();
    const token = JSON.parse(localStorage.getItem('token'));
    const dispatch = useDispatch()

    useEffect(() => {
        if(token !== null){
            dispatch(userLogin(token))
            const user = jwt.verify(token.token, 'A723nhfaAADA#12oashfo89w3nfmaodssnalva372ij4wdo');
            if(user.admin) setAdmin(true)
        }
    }, [])

    // check if the user is logged and check if it is an admin, the load the page, if not admin redirect to the login menu page and if it is not logged redirect to the login page
    return(
        <>  
            {admin ? <Outlet/> : <Navigate to='/'/>}
        </>
    )
}