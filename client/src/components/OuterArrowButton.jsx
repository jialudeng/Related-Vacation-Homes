import React from 'react';
import {OuterButton, LeftOuterArrowSvg, RightOuterArrowSvg} from '../styles/OuterArrowButtonStyle.js'; 

const OuterArrowButton = ({direction, clickFunction, hideButtons}) => {
    return (
        <OuterButton onClick={clickFunction} direction={direction} hideButtons={hideButtons}>
            {direction === "left" ? 
                <LeftOuterArrowSvg viewBox="0 0 18 18">
                    <path d="m 13.7 16.29 a 1 1 0 1 1 -1.42 1.41 l -8 -8 a 1 1 0 0 1 0 -1.41 l 8 -8 a 1 1 0 1 1 1.42 1.41 l -7.29 7.29 Z"></path>
                </LeftOuterArrowSvg> : 
                <RightOuterArrowSvg viewBox="0 0 18 18">
                    <path d="m 4.29 1.71 a 1 1 0 1 1 1.42 -1.41 l 8 8 a 1 1 0 0 1 0 1.41 l -8 8 a 1 1 0 1 1 -1.42 -1.41 l 7.29 -7.29 Z"></path> 
                </RightOuterArrowSvg>
            }
        </OuterButton>
    )
}

export default OuterArrowButton;