import React from 'react';
import axios from 'axios';
import PhotoCarouselList from './PhotoCarouselList.jsx';
import {MainContainer, Heading} from '../styles/AppStyles.js';
// import dummyData from '../../dummyData.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendations: null
        }
    }
    
    // get request for all listings 
    componentDidMount() {
        axios.get('/listings')
            .then((response) => {
                console.log(response.data[0]);
                this.setState({
                    recommendations: response.data[99].recommendations
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
            <MainContainer>
                <Heading> More homes you may like </Heading>
                {this.state.recommendations ? <PhotoCarouselList recommendations={this.state.recommendations}/>  : ''}
            </MainContainer>
        )
    }
}

export default App;
