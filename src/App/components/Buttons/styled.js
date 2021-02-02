import styled from "styled-components";

export const Button = styled.button`
    color: white;
    background-color: teal;
    width: 50%;
    font-size: 18px;
    padding: 10px;
    border: none;
    cursor: pointer;
    transition: color 0.2s, transform 0.2s;

    &:hover{
        background-color: hsl(180, 100%, 27.5%);
    }

    &:active{
        transform: scale(1.05);
        background-color: hsl(180, 100%, 30%);
    }
`;