import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
    display: ${props => props.showButtons ? "block" : "none"};
    background-color: white;
    border-radius: 20px; 
    padding: 5px 10px;
    margin: 100px 10px;
    float: ${props => props.direction === "left" ? "left" : "right"};
`;

const ArrowButton = ({direction, clickFunction, graphic, showButtons}) => {
    return (
        <Button onClick={clickFunction} direction={direction} showButtons={showButtons}> 
            {graphic}
        </Button>
    )
}

export default ArrowButton;