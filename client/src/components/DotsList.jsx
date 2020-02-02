import React from 'react';
import {DotsSectionDiv, DotsContainerDiv, DotsListWrapperDiv, DotsListDiv, DotSvg} from '../styles/DotsListStyle.js';

const DotsList = ({currentImageIndex, imageArrLength}) => {
    return (
    <DotsSectionDiv>
        <DotsContainerDiv>
            <DotsListWrapperDiv>
                <DotsListDiv>
                    {[1, 2, 3, 4, 5, 6].map((dotNum, i) => (
                        <DotSvg viewBox="0 0 100 100" dotNum={dotNum} currentImageIndex={currentImageIndex} key={i}>
                            <circle cx="50" cy="50" r="50"/>
                        </DotSvg>
                    ))};
                </DotsListDiv>
            </DotsListWrapperDiv>
        </DotsContainerDiv>
    </DotsSectionDiv>
    )
};

export default DotsList;
