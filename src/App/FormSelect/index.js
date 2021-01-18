import React from "react";
import currencies from "../currencies";
import "./style.css";

const FormSelect = ({ currency, setCurrency }) => {

    return (
        <select className="form__select" value={currency} onChange={({ target }) => setCurrency(target.value)}>
            {currencies.map((currency => (
                <option
                    key={currency.short}
                    value={currency.short}
                >
                    {currency.name}
                </option>
            )))}
        </select>
    );
};

export default FormSelect;