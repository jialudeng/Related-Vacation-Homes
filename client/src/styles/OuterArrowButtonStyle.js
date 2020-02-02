import styled from 'styled-components';

export const OuterButton = styled.a`
    display: block !important;
    float: ${props => props.direction === "left" ? "left" : "right"}; 
    margin: ${props => props.direction === "left" ? "110px 10px" : "110px 0px"};
    cursor: pointer !important;
    background-color: transparent !important;
    color: buttontext !important;
    border-width: 0px !important;
    border-style: initial !important;
    border-color: initial !important;
    border-image: initial !important;
`;

export const LeftOuterArrowSvg = styled.svg`
    role: presentation; 
    aria-hidden: true;
    focusable: false; 
    height: 22px; 
    width: 22px; 
    display: block; 
    fill: rgb(118, 118, 118);
`;

export const RightOuterArrowSvg = styled.svg`
    role: presentation; 
    aria-hidden: true;
    focusable: false; 
    height: 22px; 
    width: 22px; 
    display: block; 
    fill: rgb(118, 118, 118);
`;