import React, { useState } from "react";

const NumberInput = () => {
    const [number, setNumber] = useState()

    return (
        <input value={number} onChange={({ target }) => setNumber(target.value)} className="form__formField" step="any" min="0" placeholder="Enter the amount"
            type="number" />
    );
};

export default NumberInput;