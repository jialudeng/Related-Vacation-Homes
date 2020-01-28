import React from 'react';
import PhotoCarousel from './PhotoCarousel.jsx';
import ItemInformation from './ItemInformation.jsx';
import styled from 'styled-components';

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
            currentRecommendations: [props.recommendations[0], props.recommendations[1], props.recommendations[2]]
        }
        this.previousList = this.previousList.bind(this);
        this.nextList = this.nextList.bind(this);
    }
    previousList() {
        console.log("show previous list");
    }

    nextList() {
        console.log("show next list");
    }

    render() {
        return (
            <RecommendationListContainer>
                {this.state.currentRecommendations.map( (recommendation, i) => 
                    <RecommendationContainer key={i}>
                        <PhotoCarousel recommendation={recommendation}/> 
                        <ItemInformation recommendation={recommendation}/> 
                    </RecommendationContainer>
                )}
            </RecommendationListContainer>
        )
    }
}

export default PhotoCarouselList;