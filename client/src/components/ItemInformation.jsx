import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

const ItemInformation = ({recommendation}) => {
    return (
        <TextContainer>
            {recommendation.typeOfListing} · {`${recommendation.numOfBeds} beds `}
            {`${recommendation.numOfStars} (${recommendation.numOfReviews})`}
            <h4> {`${recommendation.title}\n`} </h4>
            <span> <strong> {`$${recommendation.pricePerNight}`} </strong> {`/ night`} </span>
        </TextContainer>
    )
}

export default ItemInformation;