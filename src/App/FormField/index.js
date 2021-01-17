import React, { useState } from "react";
import "./style.css";

const FormField = () => {
    const [valute, setValute] = useState();

    return (
        <select className="form__formField" value={valute} onChange={({ target }) => setValute(target.value)}>
            <option></option>
        </select>
    );
};

export default FormField;