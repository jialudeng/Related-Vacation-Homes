import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: lighter;
`;
const FirstLine = styled.div`
    display: inline-block;
    margin-bottom: 8px;
`;

const LeftFloat = styled.div`
    float: left;
`;

const RightFloat = styled.div`
    float: right;
`;

const PlusButton = styled.button`
    background-color: rgb(145, 24, 77);
    width: 45px;
    font-size: 12px;
    color: white;
    border-radius: 5px; 
    padding: 2px;
`;

const Type = styled.span`
    color: grey;
`;

const StarsNum = styled.span`
    font-size: 13px;
    margin-bottom: 8px;
`;

const ReviewsNum = styled.span`
    font-size: 13px;
    margin-bottom: 8px;
    color: grey;
`;

const Title = styled.span`
    margin-bottom: 8px;
`;

const Price = styled.span`
    margin-bottom: 8px;
`;

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