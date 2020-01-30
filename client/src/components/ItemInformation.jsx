import React from 'react';

import {TextContainer, FirstLine, LeftFloat, RightFloat, PlusButton, Type, StarsNum, ReviewsNum, Title, Price} from '../styles/ItemInformationStyles.js';

const ItemInformation = ({recommendation}) => {
    const hasPlusButton = recommendation.plusStatus;
    return (   
        <TextContainer>
            <FirstLine> 
                <LeftFloat>
                    {hasPlusButton ? <PlusButton> PLUS </PlusButton> : ''} 
                    <Type> {recommendation.typeOfListing} · {`${recommendation.numOfBeds} beds `}</Type>
                </LeftFloat>
                <RightFloat>
                    <StarsNum>{`${recommendation.numOfStars}`}</StarsNum> 
                    <ReviewsNum>{`(${recommendation.numOfReviews})`}</ReviewsNum>
                </RightFloat>
            </FirstLine>
            <Title>{`${recommendation.title}`} </Title>
            <Price> <strong> {`$${recommendation.pricePerNight}`} </strong> {`/ night`} </Price>
        </TextContainer>
    )
}

export default ItemInformation;