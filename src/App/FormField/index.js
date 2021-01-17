import React from "react";
import "./style.css";

const FormField = ({ currency, setCurrency }) => {

    return (
        <select className="form__formField" value={currency} onChange={({ target }) => setCurrency(target.value)}>
            <option></option>
        </select>
    );
};

export default FormField;