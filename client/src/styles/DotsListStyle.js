import styled from 'styled-components';

export const DotsContainerDiv = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 40px;
    white-space: nowrap;
    padding-bottom: 12px;
    overflow: hidden;
`;

export const DotsListDiv = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
`;

export const DotSvg = styled.svg`
    height: 6px;
    margin-left: 2.5px;
    margin-right: 2.5px;
    min-width: 6px;
    width: 6px;
    fill: ${props => (props.dotNum === 0 && props.currentImageIndex === props.dotNum ||
                    props.dotNum === 1 && props.currentImageIndex === props.dotNum ||
                    props.dotNum === 2 && props.currentImageIndex > 1 && props.currentImageIndex < props.dotsLength - 2 || 
                    props.dotNum === 3 && props.currentImageIndex === props.dotsLength - 2 ||
                    props.dotNum === 4 && props.currentImageIndex === props.dotsLength - 1)
                    ? "rgb(255, 255, 255)" : "rgb(192,192,192)"};
    opacity: 1;
    border-radius: 50%;
`;
