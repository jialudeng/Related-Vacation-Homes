import React from 'react';
import ArrowButton from './ArrowButton.jsx';
import HeartButton from './HeartButton.jsx';

const ImageSlide = ({image, handleToggleButton, nextSlide, previousSlide, showButtons}) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        position: "relative",
        width: "320px",
        height: "220px",
        position: "relative",
        borderRadius: "5px",
        margin: "10px 10px",
    }
    return (
        <div style={styles} onMouseEnter={handleToggleButton} onMouseLeave={handleToggleButton} >
            <HeartButton
                showButtons={showButtons}
                clickFunction={previousSlide}
            />
            <ArrowButton 
                showButtons={showButtons}
                direction="left"
                clickFunction={previousSlide}
            />
            <ArrowButton 
                showButtons={showButtons}
                direction="right"
                clickFunction={nextSlide}
            />
        </div>
    );
}

export default ImageSlide;