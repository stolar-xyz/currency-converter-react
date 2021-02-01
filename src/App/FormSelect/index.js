import React from "react";
import currencies from "../currencies";
import { Select } from "./styled";

const FormSelect = ({ currency, setCurrency }) => {

    return (
        <Select
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
        </Select>
    );
};

export default FormSelect;