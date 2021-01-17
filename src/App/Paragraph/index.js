import React from "react";
import "./style.css";

const Paragraph = ({ name, body }) => (
    <p className="form__paragraph">
        <span className="form__spanText">{name}</span>
        {body}
    </p>
);

export default Paragraph;