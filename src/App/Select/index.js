import React from "react";
import currencies from "../currencies";
import { StyledSelect } from "./styled";

const Select = ({ currency, setCurrency }) => {

    return (
        <StyledSelect
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}>
            {currencies.map((currency => (
                <option
                    key={currency.short}
                    value={currency.short}
                >
                    {currency.name}
                </option>
            )))}
        </StyledSelect>
    );
};

export default Select;