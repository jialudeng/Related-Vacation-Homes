import React from 'react';
import ArrowButton from './ArrowButton.jsx';
// import styled from 'styled-components';

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

const ImageSlide = ({image, handleToggleButton, nextSlide, previousSlide, showButtons}) => {
    const ImageStyles = {
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        borderRadius: "5px",
        float: "left",
        margin: "10px 10px",
        width: "330px",
        height: "220px",
    }
    return (
        <div style={ImageStyles} 
            onMouseEnter={handleToggleButton} 
            onMouseLeave={handleToggleButton} >

            <ArrowButton 
                showButtons={showButtons}
                direction="left"
                clickFunction={previousSlide}
                graphic="<"
            />

            {/*<img src={image} alt="image" height="220px" width="330px"/>*/}

            <ArrowButton 
                showButtons={showButtons}
                direction="right"
                clickFunction={nextSlide}
                graphic=">"
            />
        </div>
    );
}

export default ImageSlide;