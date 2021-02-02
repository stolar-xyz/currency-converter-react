import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;