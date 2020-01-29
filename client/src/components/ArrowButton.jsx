import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
    opacity: ${props => props.showButtons ? "0.8" : "0"};
    background-color: white;
    border-radius: 20px; 
    padding: 7px 12px;
    margin: 100px 10px;
    float: ${props => props.direction === "left" ? "left" : "right"};
`;

// const OuterButton = styled.a`
//     display: ${props => props.showButtons ? "Block" : "None"};
//     opacity: "1"
// `;

const RightArrowIcon = styled.i`
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
`;

const LeftArrowIcon = styled.i`
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
`;

const ArrowButton = ({direction, clickFunction, showButtons}) => {
    return (
        <Button onClick={clickFunction} direction={direction} showButtons={showButtons}>
            {direction === "left" ? <LeftArrowIcon/> : <RightArrowIcon/>}
        </Button>
    )
}

export default ArrowButton;