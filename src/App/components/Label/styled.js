import styled from "styled-components";

export const StyledLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        flex-wrap: wrap;
    }
`;