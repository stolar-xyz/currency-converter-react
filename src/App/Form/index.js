import React from "react";
import "./style.css";

const Form = ({ children, calculateResult, currency, amount }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount)
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
            {children}
        </form>
    )
};

export default Form;