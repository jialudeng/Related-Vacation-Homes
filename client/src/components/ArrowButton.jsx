import React from 'react';
import {Button, RightArrowIcon, LeftArrowIcon} from '../styles/ArrowButtonStyles.js';

const ArrowButton = ({direction, clickFunction, hideButtons}) => {
    return (
        <Button onClick={clickFunction} direction={direction} hideButtons={hideButtons}>
            {direction === "left" ? <LeftArrowIcon/> : <RightArrowIcon/>}
        </Button>
    )
}

export default ArrowButton;