import React from "react";

const FormField = () => (
    <select className="form__formField">
        <option value="PLN">PLN - Polska</option>
        <option value="EUR">EUR - Unia Europejska</option>
        <option value="USD">USD - USA</option>
        <option value="GBP">GBP - W.Brytania</option>
    </select>
);

export default FormField;