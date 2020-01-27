import React from 'react';
import Arrow from './Arrow.jsx';

const ImageSlide = ({image, previousSlide, nextSlide}) => {
    const styles = {
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        borderRadius: "20px",
        float: "left",
        marginLeft: "10px",
        marginBottom: "10px",
        width: "330px",
        height: "220px",
    }
    return (
        <div className="image-slide" style={styles}> 
            <Arrow 
                direction="left"
                clickFunction={previousSlide}
                graphic="<"
            />
            <Arrow
                direction="right"
                clickFunction={nextSlide}
                graphic=">"
            />
        </div>
    );
}

export default ImageSlide;