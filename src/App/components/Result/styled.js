import styled from "styled-components";

export const StyledResult = styled.p`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.primary}px;
    color: ${({ theme }) => theme.colors.main};
`;