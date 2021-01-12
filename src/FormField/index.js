import React from "react";
import "./style.css";

const FormField = () => (
    <select className="form__formField">
        <option value="PLN">PLN - Poland</option>
        <option value="EUR">EUR - European Union</option>
        <option value="USD">USD - United States</option>
        <option value="GBP">GBP - United Kingdom</option>
    </select>
);

export default FormField;