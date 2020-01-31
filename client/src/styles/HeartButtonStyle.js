import styled from 'styled-components';

export const HButton = styled.a`
    display: ${props => props.hideButtons ? "none" : "block"};
    background-color: white;
    position: absolute;
    width: 8px;
    height: 16px;
    top: -90px;
    right: 0px;
    border-radius: 50%; 
    padding: 7px 12px;
    margin: 100px 10px;
    opacity: 0.8;
    &:hover {
        transform: scale(1.1);
        opacity: 1;
    }
`;

export const HeartIcon = styled.svg`
    fill: ${props => props.likedStatus ? "red" : "white"};
    stroke: ${props => props.likedStatus ? "none" : "black"};
    stroke-width: 2;
    top: 3px;
    width: 15px;
`;