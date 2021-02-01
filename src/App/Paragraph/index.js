import React from "react";
import { StyledParagraph } from "./styled";

const Paragraph = ({ name, body }) => (
    <StyledParagraph>
        {name}{body}
    </StyledParagraph>
);

export default Paragraph;