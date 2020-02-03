import React from 'react';
import {HButton, HeartSvg} from '../styles/HeartButtonStyle.js';

const HeartButton = ({clickFunction, hideButtons, likedStatus}) => {
    return (
        <HButton onClick={clickFunction} hideButtons={hideButtons}>
            <HeartSvg likedStatus={likedStatus} viewBox="0 0 24 24">
                <path d="m 17.5 2.9 c -2.1 0 -4.1 1.3 -5.4 2.8 c -1.6 -1.6 -3.8 -3.2 -6.2 -2.7 c -1.5 0.2 -2.9 1.2 -3.6 
                2.6 c -2.3 4.1 1 8.3 3.9 11.1 c 1.4 1.3 2.8 2.5 4.3 3.6 c 0.4 0.3 1.1 0.9 1.6 0.9 s 1.2 -0.6 1.6 -0.9 c 3.2 -2.3 6.6 -5.1 8.2 -8.8 c 1.5 -3.4 0 -8.6 -4.4 -8.6"/>
            </HeartSvg> 
        </HButton>
    )
}

export default HeartButton;