import styled from "styled-components";

export const StyledResult = styled.p`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.main};
`;