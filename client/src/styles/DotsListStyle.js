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
    -webkit-box-pack: center !important;
    -webkit-box-align: end !important;
    align-items: flex-end !important;
    display: flex !important;
    justify-content: center !important;
    list-style-type: none !important;
    margin: 0px !important;
    padding: 0px !important;
    transition: -ms-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, -webkit-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s !important;
`;

export const DotSvg = styled.svg`
    height: 6px !important;
    margin-left: 2.5px !important;
    margin-right: 2.5px !important;
    min-width: 6px !important;
    width: 6px !important;
    opacity: 1 !important;
    fill: rgb(255, 255, 255) !important;
    border-radius: 50% !important;
    transition: opacity 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s !important;
`;
