import React from 'react';
import {Container, RecommendationListContainer, RecommendationContainer} from '../styles/PhotoCarouselListStyles.js';
import PhotoCarousel from './PhotoCarousel.jsx';
import ItemInformation from './ItemInformation.jsx';
import OuterArrowButton from './OuterArrowButton.jsx';

class PhotoCarouselList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFirstIndex: 0,
            currentLastIndex: 2,
            hideLeftArrow: true,
            hideRightArrow: false
        }
        this.previousList = this.previousList.bind(this);
        this.nextList = this.nextList.bind(this);
    }

    previousList() {
        if (this.state.currentFirstIndex > 0) {
            this.setState( prevState => ({
                currentFirstIndex: prevState.currentFirstIndex - 1,
                currentLastIndex: prevState.currentLastIndex - 1,
                hideLeftArrow: prevState.currentFirstIndex - 1 === 0,
                hideRightArrow: prevState.currentLastIndex + 1 === this.props.recommendations.length-1,
            }));
        }
    }

    nextList() {
        if (this.state.currentLastIndex < this.props.recommendations.length-1) {
            this.setState( prevState => ({
                currentFirstIndex: prevState.currentFirstIndex + 1,
                currentLastIndex: prevState.currentLastIndex + 1,
                hideLeftArrow: prevState.currentFirstIndex - 1  === 0,
                hideRightArrow: prevState.currentLastIndex + 1 === this.props.recommendations.length-1,
            })); 
        }

    }

    render() {
        const currentRecommendations = this.props.recommendations.slice(this.state.currentFirstIndex, this.state.currentLastIndex+1);
        return (
            <Container>
                <OuterArrowButton direction="left" clickFunction={this.previousList} hideButtons={this.state.hideLeftArrow}/>
                <OuterArrowButton direction="right" clickFunction={this.nextList} hideButtons={this.state.hideRightArrow}/>
                <RecommendationListContainer>
                    {currentRecommendations.map( (recommendation, i) => 
                        <RecommendationContainer key={i}>
                            <PhotoCarousel recommendation={recommendation}/> 
                            <ItemInformation recommendation={recommendation}/> 
                        </RecommendationContainer>
                    )}
                </RecommendationListContainer>
            </Container>
        );
    }
}

export default PhotoCarouselList;