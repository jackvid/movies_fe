import React from "react";


const CloseButton = (props) => {

    const {
        onClose
    } = props

    return (
        <button
            onClick={onClose}
            className="CloseButton-root"
        >
            <img src={require('../../image/close.png')} alt="Close"/>
        </button>
    );
}

export default CloseButton;