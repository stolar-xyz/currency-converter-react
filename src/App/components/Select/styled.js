import styled from "styled-components";

export const StyledSelect = styled.select`
    width: 50%;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-basis: 100%;
        margin-top: 10px;
    }

`;