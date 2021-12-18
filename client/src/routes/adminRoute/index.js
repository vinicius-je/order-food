import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router'

export default function AdminRoute(){
    const state = useSelector(state => state.user)

    return(
        <>
            {state[0].admin ? <Outlet/> : <Navigate to='/menu'/>}
        </>
    )
}