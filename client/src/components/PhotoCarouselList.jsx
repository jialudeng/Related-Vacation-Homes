import React from 'react';

import {RecommendationListContainer, RecommendationContainer} from '../styles/PhotoCarouselListStyles.js';

import PhotoCarousel from './PhotoCarousel.jsx';
import ItemInformation from './ItemInformation.jsx';
import ArrowButton from './ArrowButton.jsx';

class PhotoCarouselList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRecommendations: props.recommendations.slice(0, 3),
            currentFirstIndex: 0,
            currentLastIndex: 2,
            showLeftArrow: false,
            showRightArrow: true
        }
        this.previousList = this.previousList.bind(this);
        this.nextList = this.nextList.bind(this);
    }
    previousList() {
        this.setState( prevState => ({
            showLeftArrow: prevState.currentFirstIndex - 1 !== 0,
            currentRecommendations: this.props.recommendations.slice(prevState.currentFirstIndex - 1, prevState.currentLastIndex - 1),
            currentFirstIndex: prevState.currentFirstIndex - 1,
            currentLastIndex: prevState.currentLastIndex - 1
        }));
    }

    nextList() {
        this.setState( prevState => ({
            showRightArrow: prevState.currentLastIndex + 1 !== prevState.currentRecommendations.length - 1,
            currentRecommendations: this.props.recommendations.slice(prevState.currentFirstIndex + 1, prevState.currentLastIndex + 1),
            currentFirstIndex: prevState.currentFirstIndex + 1,
            currentLastIndex: prevState.currentLastIndex + 1
        })); 
    }

    render() {
        return (
            <RecommendationListContainer>
                <ArrowButton direction="left" clickFunction={this.previousList} showButtons={this.state.showLeftArrow}/>
                {this.state.currentRecommendations.map( (recommendation, i) => 
                    <RecommendationContainer key={i}>
                        <PhotoCarousel recommendation={recommendation}/> 
                        <ItemInformation recommendation={recommendation}/> 
                    </RecommendationContainer>
                )}
                <ArrowButton direction="right" clickFunction={this.nextList} showButtons={this.state.showRightArrow}/>
            </RecommendationListContainer>
        )
    }
}

export default PhotoCarouselList;