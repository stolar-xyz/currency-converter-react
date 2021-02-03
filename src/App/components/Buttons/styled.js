import styled from "styled-components";

export const Button = styled.button`
    color: white;
    background-color: ${({ theme }) => theme.colors.main};
    width: 50%;
    font-size: 18px;
    padding: 10px;
    border: none;
    cursor: pointer;
    transition: filter 0.2s, transform 0.2s;

    &:hover{
        filter: brightness(1.1);
    }

    &:active{
        transform: scale(1.05);
        filter: brightness(1.2);
    }
`;