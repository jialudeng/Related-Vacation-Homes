import React from 'react';
import {DotsContainerDiv, DotsListDiv, DotSvg} from '../styles/DotsListStyle.js';

const DotsList = ({images, currentImageIndex}) => {
    return (
    <DotsContainerDiv>
        <DotsListDiv>
            {images.slice(0, 5).map((image, i) => {
                return (
                    <DotSvg viewBox="0 0 100 100" currentImageIndex={currentImageIndex} dotNum={i} key={i} dotsLength={images.length}> 
                        <circle cx="50" cy="50" r="50"/>
                    </DotSvg>
                )
            })}
        </DotsListDiv>
    </DotsContainerDiv>
    )
}

export default DotsList;
