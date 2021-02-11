import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: ${({ theme }) => theme.fontSizes.secondary}px;
    }
`;