import styled from 'styled-components';

export const HButton = styled.a`
    display: ${props => props.hideButtons ? "none" : "block"};
    background-color: rgba(255, 255, 255, 09);
    position: absolute;
    cursor: pointer;
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
    stroke-width: 1.4;
    stroke-linecap: round;
    stroke-linejoin: round;
    role: presentation;
    width: 16px;
`;