import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import Header from '../../components/Header'

export default function PrivateRoute({children}){
    const state = useSelector(state => state.user)
    
    return (
        <>
            <Header/>
            {state[0] !== undefined ? children : <Navigate to='/'/>}
        </>
    )
        
}