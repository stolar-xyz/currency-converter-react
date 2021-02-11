import styled from "styled-components";

export const StyledLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.primary}px;
    margin: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
        flex-wrap: wrap;
    }
`;