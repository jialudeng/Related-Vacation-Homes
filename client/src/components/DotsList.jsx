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





























































// export default class DotsList extends React.Component {
//     render() {
//         const dotArray = [];
//         const currentImageIndex = this.props.currentImageIndex;
//         const numOfDots = this.props.imageArrLength;
//         for (var dotNum = 0; dotNum < numOfDots; dotNum++) {   
//             let inputColor;
//             if (dotNum === 0 && currentImageIndex === dotNum || 
//                 dotNum === 1 && currentImageIndex === dotNum ||
//                 dotNum === 2 && currentImageIndex > 1 && currentImageIndex < numOfDots-2 ||
//                 dotNum === 3 && currentImageIndex === numOfDots-2 ||
//                 dotNum === 4 && currentImageIndex === numOfDots-1 ) {
//                 inputColor="rgb(255, 255, 255)";
//             } else {
//                 inputColor="rgb(192,192,192)";
//             }
//             dotArray.push(<DotSvg key={dotNum} viewBox="0 0 100 100" inputColor={inputColor}>
//                 <circle cx="50" cy="50" r="50"/>
//             </DotSvg>);
//         }
//         return (
//              <DotsContainerDiv>
//                 <DotsListDiv>
//                    {dotArray}
//                 </DotsListDiv>
//              </DotsContainerDiv>
//         )
//     }
// }

// const DotsList = ({currentImageIndex, imageArrLength}) => {
//     return (
//         <DotsContainerDiv>
//             <DotsListDiv>
//                 <DotSvg viewBox="0 0 100 100" dotNum={1}
//                     inputColor={currentImageIndex === 0 ? "rgb(255, 255, 255)" : "rgb(192,192,192)"}>
//                     <circle cx="50" cy="50" r="50"/>
//                 </DotSvg>

//                 <DotSvg viewBox="0 0 100 100" dotNum={2}
//                     inputColor={currentImageIndex === 1 ? "rgb(255, 255, 255)" : "rgb(192,192,192)"}>
//                     <circle cx="50" cy="50" r="50"/>
//                 </DotSvg>

//                 <DotSvg viewBox="0 0 100 100" dotNum={3}
//                     inputColor={currentImageIndex > 1 & currentImageIndex < imageArrLength-2 ? "rgb(255, 255, 255)" : "rgb(192, 192, 192)"}>
//                     <circle cx="50" cy="50" r="50"/>
//                 </DotSvg>

//                 <DotSvg viewBox="0 0 100 100" dotNum={4} 
//                     inputColor={currentImageIndex === imageArrLength-2 ? "rgb(255, 255, 255)" : "rgb(192,192,192)"}>
//                     <circle cx="50" cy="50" r="50"/>
//                 </DotSvg>

//                 <DotSvg viewBox="0 0 100 100" dotNum={5} 
//                     inputColor={currentImageIndex === imageArrLength-1 ? "rgb(255, 255, 255)" : "rgb(192,192,192)"}>
//                     <circle cx="50" cy="50" r="50"/>
//                 </DotSvg>
//             </DotsListDiv>
//          </DotsContainerDiv>
//     )
// };

// export default DotsList;