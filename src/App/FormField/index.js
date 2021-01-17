import React, { useState } from "react";
import "./style.css";

const FormField = () => {
    const [valute, setValute] = useState("PLN - Poland");

    return (
        <select className="form__formField" value={valute} onChange={({ target }) => setValute(target.value)}>
            <option>PLN - Poland</option>
            <option>EUR - European Union</option>
            <option>USD - United States</option>
            <option>GBP - United Kingdom</option>
        </select>
    );
};

export default FormField;