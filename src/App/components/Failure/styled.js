import styled from "styled-components";

export const StyledFailure = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.main}px;
    color: ${({ theme }) => theme.colors.error};
`;