import React from 'react';
// import styled from 'styled-components';
import ArrowButton from './ArrowButton.jsx';

// attempt in using 'styled-components' but backgroundImages won't render
// const ImageContainer = styled.div`
//     background-image: url(${props => props.image};
//     background-size: cover;
//     border-radius: 5px;
//     float: left;
//     margin-left: 10px;
//     margin-bottom: 10px;
//     width: 330px;
//     height: 220px;
//     `;

const ImageSlide = ({image, previousSlide, nextSlide}) => {
    const ImageStyles = {
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        borderRadius: "5px",
        float: "left",
        marginLeft: "10px",
        marginBottom: "10px",
        width: "330px",
        height: "220px",
    }
    return (
        <div style={ImageStyles}>
            <ArrowButton
                direction="left"
                clickFunction={previousSlide}
                graphic="<"
            />
            <ArrowButton 
                direction="right"
                clickFunction={nextSlide}
                graphic=">"
            />
        </div>
    );
}

export default ImageSlide;