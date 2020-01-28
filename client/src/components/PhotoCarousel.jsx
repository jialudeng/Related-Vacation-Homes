import React from 'react';
import ImageSlide from './ImageSlide.jsx';

class PhotoCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: props.recommendation.images,
            currentImageIndex: 0, 
            showButtons: false
        }
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.handleToggleButton = this.handleToggleButton.bind(this);
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

    handleToggleButton() {
        console.log("buttons will be toggled");
        this.setState(prevState => ({
            showButtons: !prevState.showButtons
        }));
    }

    render() {

        return (
            <div className="carousel">
                <ImageSlide
                    image={this.state.images[this.state.currentImageIndex]} 
                    previousSlide={this.previousSlide} 
                    nextSlide={this.nextSlide}
                    handleToggleButton={this.handleToggleButton}
                    showButtons={this.state.showButtons}
                />
            </div>
        )
    }
}

export default PhotoCarousel;