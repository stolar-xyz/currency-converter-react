import styled from "styled-components";

export const StyledInput = styled.input`
    width: 50%;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        flex-basis: 100%;
        margin-top: 10px;
    }
`;