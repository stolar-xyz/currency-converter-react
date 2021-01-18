import React from "react";
import "./style.css";

const Input = ({ amount, setAmount }) => {

    return (
        <input value={amount} onChange={({ target }) => setAmount(target.value)} className="form__input" step="any" min="0" placeholder="Enter the amount"
            type="number" required />
    );
};

export default Input;