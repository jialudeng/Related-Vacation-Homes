import styled from 'styled-components';

export const Button = styled.a`
    display: ${props => props.hideButtons ? "none" : "block"};
    float: ${props => props.direction === "left" ? "left" : "right"};
    background-color: white;
    cursor: pointer;
    height: 16px;
    width: 8px;
    border-radius: 50%; 
    padding: 7px 12px;
    margin: 100px 10px;
    opacity: 0.8;
    transition: transform 300ms ease-in-out;
    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
`;

export const RightArrowSvg = styled.svg`
    role: presentation; 
    aria-hidden: true;
    focusable: false; 
    height: 10px; 
    width: 10px; 
    display: block; 
    fill: black;
`;

export const LeftArrowSvg = styled.svg`
    role: presentation; 
    aria-hidden: true;
    focusable: false; 
    height: 10px; 
    width: 10px; 
    display: block; 
    fill: black;
`;
