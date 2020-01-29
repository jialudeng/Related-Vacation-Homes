import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PhotoCarouselList from './PhotoCarouselList.jsx';
import dummyData from '../../dummyData.js';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Heading = styled.div`
    font-size: 24px !important;
    line-height: 30px !important;
    letter-spacing: normal !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    color: #484848 !important;
    margin-left: 60px;
    display: block;
    font-weight: bold;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: dummyData, // currently, working off of dummy data already in the client
            recommendations: dummyData[0].recommendations
        }
    }
    
    // get request for all listings 
    componentDidMount() {
        axios.get('./listings')
            .then((response) => {
                this.setState({
                    listings: response.data,
                    recommendations: response.data[1].recommendations
                }) 
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // send a get request for a specific listing so when type localhost:3003/listing/1, send a get request for the listing with listingId of 1 
    // componentDidMount() {
    //     axios.get('./listings/:listingId')
    //         .then((response) => {
    //             let listingObject = response.data
    //             this.setState({
    //                 recommendations: listingObject.recommendations
    //             }) 
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    render() {
        return (
            <AppContainer id="main-content">
                <Heading> More homes you may like </Heading>
                <PhotoCarouselList recommendations={this.state.recommendations}/>
            </AppContainer>
        )
    }
}

export default App;
