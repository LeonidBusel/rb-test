import React from 'react';

import "./button.less";

const Button = ({ title, type, onClick }) => {
    return <div className={`button${type === "green" ? " green" : ""}`} onClick={onClick}>
        <span className="button-title">{title}</span>
    </div>
}

export default Button;