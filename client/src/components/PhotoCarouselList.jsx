import React from 'react';
import styled from 'styled-components';

import PhotoCarousel from './PhotoCarousel.jsx';
import ItemInformation from './ItemInformation.jsx';
import ArrowButton from './ArrowButton.jsx';

const RecommendationListContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const RecommendationContainer = styled.div`
    display: flex;
    flex-direction: column; 
`;

class PhotoCarouselList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendations: props.recommendations,
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
        const {recommendations} = this.state;
        const  {currentRecommendations} = this.state;
        const {currentFirstIndex} = this.state;
        const {currentLastIndex} = this.state;
        this.setState({
            showLeftArrow: currentFirstIndex - 1 !== 0,
            currentRecommendations: currentFirstIndex === 0 ? currentRecommendations : recommendations.slice(currentFirstIndex - 1, currentLastIndex - 1),
            currentFirstIndex: currentFirstIndex - 1,
            currentLastIndex: currentLastIndex - 1,
        })
    }

    nextList() {
        const {recommendations} = this.state;
        const {currentFirstIndex} = this.state;
        const {currentLastIndex} = this.state;
        this.setState({
            currentRecommendations: recommendations.slice(currentFirstIndex + 1, currentLastIndex + 1),
            currentFirstIndex: currentFirstIndex + 1,
            currentLastIndex: currentLastIndex + 1,
            showRightArrow: currentLastIndex + 1 !== recommendations.length-1
        }); 
    }

    render() {
        return (
            <RecommendationListContainer>
                <ArrowButton direction="left" clickFunction={this.previousList} graphic="<" showButtons={this.state.showLeftArrow}/>
                {this.state.currentRecommendations.map( (recommendation, i) => 
                    <RecommendationContainer key={i}>
                        <PhotoCarousel recommendation={recommendation}/> 
                        <ItemInformation recommendation={recommendation}/> 
                    </RecommendationContainer>
                )}
                <ArrowButton direction="right" clickFunction={this.nextList} graphic=">" showButtons={this.state.showRightArrow}/>
            </RecommendationListContainer>
        )
    }
}

export default PhotoCarouselList;