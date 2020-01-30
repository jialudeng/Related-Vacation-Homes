import styled from 'styled-components';

export const Button = styled.a`
    background-color: white;
    position: absolute;
    height: 18px;
    width: 10px;
    left: ${props => props.direction === "left" ? "5px" : "315"};
    right: ${props => props.direction === "left" ? "0px" : "5px"};
    border-radius: 50%; 
    padding: 7px 12px;
    margin: 100px 10px;
    opacity: 0.8;
    display: ${props => props.showButtons ? "block" : "none"};
`;
// float: ${props => props.direction === "left" ? "left" : "right"};

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
