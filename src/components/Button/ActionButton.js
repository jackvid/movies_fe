import React from "react";
import "./ActionButton.css"


const ActionButton = (props) => {

    const {
        onClick,
        label,
        active
    } = props;

    return (
        <button
            onClick={onClick}
            className="ActionButton-container"
        >
            <div
                className="ActionButton-label"
            >
                {label}
            </div>
        </button>
    );
}

export default ActionButton;