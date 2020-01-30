import styled from 'styled-components';

export const HButton = styled.a`
    background-color: white;
    position: absolute;
    width: 13px;
    height: 19px;
    top: -90px;
    right: 5px;
    border-radius: 50%; 
    padding: 7px 12px;
    margin: 100px 10px;
    opacity: 0.8;
    display: ${props => props.showButtons ? "block" : "none"};
`;