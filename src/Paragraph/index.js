import React from "react";

const Paragraph = ({ name, body }) => (
    <p className="form__paragraph">
        <span className="form__spanText">{name}</span>
        {body}
    </p>
);

export default Paragraph;