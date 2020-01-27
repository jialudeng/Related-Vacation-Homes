import React from 'react';
import Arrow from './Arrow.jsx';
import ImageSlide from './ImageSlide.jsx';

class PhotoCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: props.recommendation.images,
            currentImageIndex: 0
        }
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = this.state.images.length - 1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
        this.setState({
            currentImageIndex: index
        }); 
    }

    nextSlide() {
        const lastIndex = this.state.images.length - 1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
        this.setState({
            currentImageIndex: index
        }) 
    }

    render() {
        // const styles = {
        //     backgroundImage: 'url(' + this.state.images[this.state.currentImageIndex] + ')',
        //     // backgroundSize: 'cover',
        //     // backgroundPosition: 'center'
        //     float: "left",
        //     marginLeft: "10px",
        //     marginBottom: "10px",
        //     width: "330px",
        //     height: "220px",
        //     backgroundSize: "cover"
        // }
        return (
            <div className="carousel">
                <ImageSlide 
                    image={this.state.images[this.state.currentImageIndex]} 
                    previousSlide={this.previousSlide} 
                    nextSlide={this.nextSlide}/>
                {/*<img src={this.state.images[this.state.currentImageIndex]} className="img" alt="..."/>*/}
            </div>
        )
    }
}

export default PhotoCarousel;