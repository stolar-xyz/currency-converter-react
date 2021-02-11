import styled from "styled-components";

export const StyledClock = styled.p`
    font-family: monospace;
    text-align: right;
    font-size: ${({ theme }) => theme.fontSizes.secondary}px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        text-align: center;
    }
`;