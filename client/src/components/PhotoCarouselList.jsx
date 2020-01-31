import React from 'react';

import {RecommendationListContainer, RecommendationContainer} from '../styles/PhotoCarouselListStyles.js';

import PhotoCarousel from './PhotoCarousel.jsx';
import ItemInformation from './ItemInformation.jsx';
import ArrowButton from './ArrowButton.jsx';

class PhotoCarouselList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRecommendations: this.props.recommendations.slice(0, 3),
            currentFirstIndex: 0,
            currentMiddleIndex: 1,
            currentLastIndex: 2,
            hideLeftArrow: true,
            hideRightArrow: false
        }
        this.previousList = this.previousList.bind(this);
        this.nextList = this.nextList.bind(this);
    }

    previousList() {
        this.setState( prevState => ({
            hideLeftArrow: prevState.currentFirstIndex - 1 === 0,
            currentRecommendations: [this.props.recommendations[prevState.currentFirstIndex-1], this.props.recommendations[prevState.currentMiddleIndex-1], this.props.recommendations[prevState.currentLastIndex-1]],
            currentFirstIndex: prevState.currentFirstIndex - 1,
            currentMiddleIndex: prevState.currentMiddleIndex - 1,
            currentLastIndex: prevState.currentLastIndex - 1,
        }));
        // currentRecommendations: this.props.recommendations.slice(prevState.currentFirstIndex - 1, prevState.currentLastIndex - 1)
    }

    nextList() {
        this.setState( prevState => ({
            hideRightArrow: prevState.currentLastIndex + 1 === prevState.currentRecommendations.length - 1,
            currentRecommendations: [this.props.recommendations[prevState.currentFirstIndex+1], this.props.recommendations[prevState.currentMiddleIndex+1], this.props.recommendations[prevState.currentLastIndex+1]],
            currentFirstIndex: prevState.currentFirstIndex + 1,
            currentMiddleIndex: prevState.currentMiddleIndex + 1,
            currentLastIndex: prevState.currentLastIndex + 1
        })); 
        // currentRecommendations: this.props.recommendations.slice(prevState.currentFirstIndex + 1, prevState.currentLastIndex + 1)
    }

    render() {
        return (
            <RecommendationListContainer>
                <ArrowButton direction="left" clickFunction={this.previousList} hideButtons={this.state.hideLeftArrow}/>
                {this.state.currentRecommendations.map( (recommendation, i) => 
                    <RecommendationContainer key={i}>
                        <PhotoCarousel recommendation={recommendation}/> 
                        <ItemInformation recommendation={recommendation}/> 
                    </RecommendationContainer>
                )}
                <ArrowButton direction="right" clickFunction={this.nextList} hideButtons={this.state.hideRightArrow}/>
            </RecommendationListContainer>
        )
    }
}

export default PhotoCarouselList;