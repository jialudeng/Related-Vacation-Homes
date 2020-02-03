import styled from 'styled-components';

export const HeartSvg = styled.svg`
    display: block;
    position: absolute;
    fill: ${props => props.likedStatus ? "red" : "white"};
    height: 16px;
    width: 16px;
    top: 7px;
    right: 7px; 
    stroke: ${props => props.likedStatus ? "none" : "black"};
    stroke-width: 1.4;
    stroke-linecap: round; 
    stroke-linejoin: round;
    focusable: false; 
    aria-hidden: true;
    role: presentation;
    fill-opacity: 50;
    overflow: visible;
`;

export const HButton = styled.a`
    position: absolute;
    display: ${props => props.hideButtons ? "none" : "block"};
    background-color: rgba(255, 255, 255);
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