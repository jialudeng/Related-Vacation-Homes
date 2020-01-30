import styled from "styled-components";

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: lighter;
`;
export const FirstLine = styled.div`
    display: inline-block;
    margin-bottom: 8px;
`;
export const LeftFloat = styled.div`
    float: left;
`;
export const RightFloat = styled.div`
    float: right;
`;
export const PlusButton = styled.button`
    background-color: rgb(145, 24, 77);
    width: 45px;
    font-size: 12px;
    color: white;
    border-radius: 5px; 
    padding: 2px;
`;
export const Type = styled.span`
    color: grey;
`;

export const StarsNum = styled.span`
    font-size: 13px;
    margin-bottom: 8px;
`;
export const ReviewsNum = styled.span`
    font-size: 13px;
    margin-bottom: 8px;
    color: grey;
`;
export const Title = styled.span`
    margin-bottom: 8px;
`;
export const Price = styled.span`
    margin-bottom: 8px;
`;
