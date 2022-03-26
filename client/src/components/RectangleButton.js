import React from "react";
import './RectangleButton.css'

export default function RectangleButton(props){
    return(
        <button className="rect-btn" type="submit">
            {props.value}
        </button>
    )
}