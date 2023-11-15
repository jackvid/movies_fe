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
            className={"ActionButton-container"}
            style={ active ? {backgroundColor: "#00BAFF"} : {} }
        >
            <div
                className="ActionButton-label"
                style={ active ? {color: "black"} : {} }
            >
                {label}
            </div>
        </button>
    );
}

export default ActionButton;