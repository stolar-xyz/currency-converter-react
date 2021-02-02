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
        filter: opacity(0.9)
    }

    &:active{
        transform: scale(1.05);
        filter: opacity(0.8)
    }
`;