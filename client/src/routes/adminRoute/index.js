import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router'

export default function AdminRoute(){
    const state = useSelector(state => state.user)
    // check if the user is logged and check if it is an admin, the load the page, if not admin redirect to the login menu page and if it is not logged redirect to the login page
    return(
        <>  
            {state[0] !== undefined ?  state[0].admin ? <Outlet/> : <Navigate to='/menu'/> : <Navigate to='/'/>}
        </>
    )
}