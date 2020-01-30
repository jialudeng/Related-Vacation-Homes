import React from 'react';
import ImageSlide from './ImageSlide.jsx';

class PhotoCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0, 
            showButtons: false
        }
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.handleToggleButton = this.handleToggleButton.bind(this);
    }

    previousSlide() {
        const lastIndex = this.props.recommendation.images.length - 1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
        this.setState({
            currentImageIndex: index
        }); 
    }

    nextSlide() {
        const lastIndex = this.props.recommendation.images.length - 1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
        this.setState({
            currentImageIndex: index
        }) 
    }

    // handleLike() {
    //     console.log('heart should change to red, button size/opacity should increase, and button should show')
    // }

    handleToggleButton() {
        this.setState(prevState => ({
            showButtons: !prevState.showButtons
        }));
    }

    render() {
        return (
            <div className="carousel">
                <ImageSlide
                    image={this.props.recommendation.images[this.state.currentImageIndex]} 
                    handleToggleButton={this.handleToggleButton}
                    nextSlide={this.nextSlide}
                    previousSlide={this.previousSlide}
                    showButtons={this.state.showButtons}
                />
            </div>
        )
    }
}

export default PhotoCarousel;