import { StyledLabel } from "./styled";

const Label = ({ name, body }) => (
    <StyledLabel>
        {name}{body}
    </StyledLabel>
);

export default Label;