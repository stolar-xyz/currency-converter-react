import React from "react";
import "./style.css";
import currencies from "../currencies";

const FormField = ({ currency, setCurrency }) => {

    return (
        <select className="form__formField" value={currency} onChange={({ target }) => setCurrency(target.value)}>
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

export default FormField;