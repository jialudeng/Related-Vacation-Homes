import React from 'react';
import {Button, RightArrowIcon, LeftArrowIcon} from '../styles/ArrowButtonStyles.js';

const ArrowButton = ({direction, clickFunction, showButtons}) => {
    return (
        <Button onClick={clickFunction} direction={direction} showButtons={showButtons}>
            {direction === "left" ? <LeftArrowIcon/> : <RightArrowIcon/>}
        </Button>
    )
}

export default ArrowButton;