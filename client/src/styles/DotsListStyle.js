import styled from 'styled-components';

export const DotsSectionDiv = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 40px;
    white-space: nowrap;
`;

export const DotsContainerDiv = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: center;
    height: 100%;
    contain: content;
`;

export const DotsListWrapperDiv = styled.div`
    display: flex;
    padding-bottom: 12px;
    max-width: 55px;
    overflow: hidden;
`;

export const DotsListDiv = styled.div`
    -webkit-box-pack: center;
    -webkit-box-align: end;
    align-items: flex-end;
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
`;
// transition: -ms-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, -webkit-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s !important;

export const DotSvg = styled.svg`
    height: 6px;
    margin-left: 2.5px;
    margin-right: 2.5px;
    min-width: 6px;
    width: 6px;
    fill: ${props => props.dotNum === props.currentImageIndex ? "rgb(255, 255, 255)" : "grey"};
    opacity: 1;
    border-radius: 50%;
`;
// transition: opacity 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s !important;

// fill: rgb(255, 255, 255) !important;