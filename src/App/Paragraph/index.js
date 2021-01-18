import React from "react";
import "./style.css";

const Paragraph = ({ name, body }) => (
    <p className="form__paragraph">
        {name}{body}
    </p>
);

export default Paragraph;