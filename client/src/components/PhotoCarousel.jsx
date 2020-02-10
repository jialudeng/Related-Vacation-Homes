import React from 'react';
// import Modal from './Modal.jsx';
import ArrowButton from './ArrowButton.jsx';
import HeartButton from './HeartButton.jsx';
import DotsList from './DotsList.jsx';


class PhotoCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0, 
            hideButtons: true,
            likedStatus: props.recommendation.likedStatus,
        }
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.handleToggleButton = this.handleToggleButton.bind(this);
        this.handleToggleLike = this.handleToggleLike.bind(this);
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

    handleToggleLike() {
        this.setState(prevState => ({
            likedStatus: !prevState.likedStatus
        }));
    }

    handleToggleButton() {
        this.setState(prevState => ({
            hideButtons: !prevState.hideButtons
        }));
    }

    render() {
        const styles = {
            backgroundImage: `url(${this.props.recommendation.images[this.state.currentImageIndex]})`,
            backgroundSize: 'cover',
            width: "366px",
            height: "244px",
            position: "relative",
            borderRadius: "5px",
            margin: "10px 10px",
        }
        return (
            <div style={styles} onMouseEnter={this.handleToggleButton} onMouseLeave={this.handleToggleButton}>

                <HeartButton
                    // clickFunction={this.props.handleToggleModal}
                    clickFunction={this.handleToggleLike}
                    hideButtons={this.state.hideButtons}
                    likedStatus={this.state.likedStatus}
                />

                <DotsList 
                    images={this.props.recommendation.images}
                    currentImageIndex={this.state.currentImageIndex}  
                />
    
                <ArrowButton 
                    direction="left"
                    clickFunction={this.previousSlide}
                    hideButtons={this.state.hideButtons}
                />
                <ArrowButton 
                    direction="right"
                    clickFunction={this.nextSlide}
                    hideButtons={this.state.hideButtons}
                />

                {/*<Modal 
                    showingModal={this.props.showingModal} 
                    handleToggleModal={this.props.handleToggleModal}
                />*/}
            </div>
        )
    }
}

export default PhotoCarousel;