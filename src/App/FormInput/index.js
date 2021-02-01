import React from "react";
import { Input } from "./styled";

const FormInput = ({ amount, setAmount }) => {

    return (
        <Input
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

export default FormInput;