import React from 'react';
import {DotsContainerDiv, DotsListDiv, DotSvg} from '../styles/DotsListStyle.js';

const DotsList = ({images, currentImageIndex}) => {
    return (
    <DotsContainerDiv>
        <DotsListDiv>
            {images.slice(0, 5).map((image, i) => (
                    <DotSvg viewBox="0 0 100 100" currentImageIndex={currentImageIndex} dotNum={i} key={i} dotsLength={images.length}> 
                        <circle cx="50" cy="50" r="50"/>
                    </DotSvg>
            ))}
        </DotsListDiv>
    </DotsContainerDiv>
    )
}


// const DotsList = ({currentImageIndex, images}) => {
//         return (
//             <DotsContainerDiv>
//                 <DotsListDiv>
//                     <DotSvg viewBox="0 0 100 100" dotNum={1}
//                         inputColor={currentImageIndex === 0 ? "rgb(255, 255, 255)" : "rgb(192,192,192)"}>
//                         <circle cx="50" cy="50" r="50"/>
//                     </DotSvg>
    
//                     <DotSvg viewBox="0 0 100 100" dotNum={2}
//                         inputColor={currentImageIndex === 1 ? "rgb(255, 255, 255)" : "rgb(192,192,192)"}>
//                         <circle cx="50" cy="50" r="50"/>
//                     </DotSvg>
    
//                     <DotSvg viewBox="0 0 100 100" dotNum={3}
//                         inputColor={currentImageIndex > 1 & currentImageIndex < images.length-2 ? "rgb(255, 255, 255)" : "rgb(192, 192, 192)"}>
//                         <circle cx="50" cy="50" r="50"/>
//                     </DotSvg>
    
//                     <DotSvg viewBox="0 0 100 100" dotNum={4} 
//                         inputColor={currentImageIndex === images.length-2 ? "rgb(255, 255, 255)" : "rgb(192,192,192)"}>
//                         <circle cx="50" cy="50" r="50"/>
//                     </DotSvg>
    
//                     <DotSvg viewBox="0 0 100 100" dotNum={5} 
//                         inputColor={currentImageIndex === images.length-1 ? "rgb(255, 255, 255)" : "rgb(192,192,192)"}>
//                         <circle cx="50" cy="50" r="50"/>
//                     </DotSvg>
//                 </DotsListDiv>
//              </DotsContainerDiv>
//         )
//     };

export default DotsList;
