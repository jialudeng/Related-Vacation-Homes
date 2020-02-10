import React from 'react';
import axios from 'axios';
import PhotoCarouselList from './PhotoCarouselList.jsx';
import {MainContainer, Heading} from '../styles/AppStyles.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendations: []
        }
    }
    
    // get request for all listings 
    componentDidMount() {
        axios.get('/listings')
            .then((response) => {
                this.setState({
                    recommendations: response.data[1].recommendations
                }) 
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // send a get request for a specific listing so when type localhost:3003/listing/1, send a get request for the listing with listingId of 1 
    // getListingById () {
    //     axios.get('http://localhost:3002/listings/:listingId')
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
            <MainContainer>
                <Heading> More homes you may like </Heading>
                <PhotoCarouselList recommendations={this.state.recommendations}/>
            </MainContainer>
        )
    }
}

export default App;
