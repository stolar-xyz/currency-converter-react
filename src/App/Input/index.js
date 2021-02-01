import React from "react";
import { StyledInput } from "./styled";

const Input = ({ amount, setAmount }) => {

    return (
        <StyledInput
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            step="any"
            min="0"
            placeholder="Enter the amount"
            type="number"
            required
        />
    );
};

export default Input;