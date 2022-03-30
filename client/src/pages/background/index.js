import React from "react";
import { Outlet } from "react-router";
import './style.css'

export default function Backgound(props){
    return(
        <div className="background-container">
            <Outlet/>
            <div className="rect-bg"></div>
        </div>
    )
}