import React from "react";
import './style.css';

const RectangleButton = (props) => {
    return(
        <button className="rect-btn" type="submit">
            {props.value}
        </button>
    )
}

export default RectangleButton;