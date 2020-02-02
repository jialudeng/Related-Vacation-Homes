import React from 'react';
import {DotsSectionDiv, DotsContainerDiv, DotsListWrapperDiv, DotsListDiv, DotSvg} from '../styles/DotsListStyle.js';

const DotsList = () => (
    <DotsSectionDiv>
        <DotsContainerDiv>
            <DotsListWrapperDiv>
                <DotsListDiv>
                    <DotSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50"/>
                    </DotSvg>

                    <DotSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50"/>
                    </DotSvg>

                    <DotSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r ="50"/>
                    </DotSvg>

                    <DotSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50"/>
                    </DotSvg>

                    <DotSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50"/>
                    </DotSvg>
                </DotsListDiv>
            </DotsListWrapperDiv>
        </DotsContainerDiv>
    </DotsSectionDiv>
);

export default DotsList;
