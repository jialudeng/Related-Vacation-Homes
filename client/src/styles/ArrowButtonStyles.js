import styled from 'styled-components';

export const Button = styled.a`
    float: ${props => props.direction === "left" ? "left" : "right"};
    background-color: white;
    height: 16px;
    width: 8px;
    border-radius: 50%; 
    padding: 7px 12px;
    margin: 100px 10px;
    display: ${props => props.showButtons ? "block" : "none"};
    opacity: 0.8;
    transition: transform 300ms ease-in-out;
    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
`;
// opacity: ${props => props.showButtons ? "0.8" : "0"};
// left: ${props => props.direction === "left" ? "5px" : "315"};
// right: ${props => props.direction === "left" ? "0px" : "5px"};

export const RightArrowIcon = styled.i`
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
`;

export const LeftArrowIcon = styled.i`
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
`;
