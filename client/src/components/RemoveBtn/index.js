import React from "react";
import './style.css';

const RemoveBtn = (props) => {
    const onClick = props.onClick;
    return(
        <div className="remove-btn-container" onClick={onClick}>
            <i className="fas fa-times remove-order-icon"></i>
        </div>
    )
}

export default RemoveBtn;