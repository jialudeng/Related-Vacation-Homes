import React from 'react';
import {Button, RightArrowSvg, LeftArrowSvg} from '../styles/ArrowButtonStyles.js'; 

const ArrowButton = ({direction, clickFunction, hideButtons}) => {
    return (
        <Button onClick={clickFunction} direction={direction} hideButtons={hideButtons}>
            {direction === "left" ? 
                <LeftArrowSvg viewBox="0 0 16 16">
                    <path d="m 10.8 16 c -0.4 0 -0.7 -0.1 -0.9 -0.4 l -6.8 -6.7 c -0.5 -0.5 -0.5 -1.3 0 -1.8 l 6.8 -6.7 c 0.5 -0.5 1.2 -0.5 1.7 0 s 0.5 1.2 0 1.7 l -5.8 5.9 l 5.8 5.9 c 0.5 0.5 0.5 1.2 0 1.7 c -0.2 0.3 -0.5 0.4 -0.8 0.4"></path>
                </LeftArrowSvg> :
                <RightArrowSvg viewBox="0 0 16 16">
                    <path d="m5.3 16c .3 0 .6-.1.8-.4l6.8-6.7c.5-.5.5-1.3 0-1.8l-6.8-6.7c-.5-.5-1.2-.5-1.7 0s-.5 1.2 0 1.7l5.8 5.9-5.8 5.9c-.5.5-.5 1.2 0 1.7.2.3.5.4.9.4"></path>
                </RightArrowSvg> 
            }
        </Button>
    )
}

export default ArrowButton;