import styled from "styled-components";

export const StyledTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.header}px;
    color: ${({ theme }) => theme.colors.main};
`;