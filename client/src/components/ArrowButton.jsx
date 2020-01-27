import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
    background-color: white;
    border-radius: 20px; 
    padding: 5px 10px;
    margin: 100px 10px;
    float: ${props => props.direction === "left" ? "left" : "right"};
`;

const ArrowButton = ({direction, clickFunction, graphic}) => {
    return (
        <Button onClick={clickFunction} direction={direction}> 
            {graphic}
        </Button>
    )
}

export default ArrowButton;