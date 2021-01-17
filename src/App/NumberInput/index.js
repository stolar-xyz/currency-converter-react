import React from "react";

const NumberInput = ({ amount, setAmount }) => {

    return (
        <input value={amount} onChange={({ target }) => setAmount(target.value)} className="form__formField" step="any" min="0" placeholder="Enter the amount"
            type="number" />
    );
};

export default NumberInput;