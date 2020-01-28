import React from 'react';
import axios from 'axios';
import PhotoCarouselList from './PhotoCarouselList.jsx';
import dummyData from '../../dummyData.js';

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
            <div id="main-content">
                <PhotoCarouselList recommendations={this.state.recommendations}/>
            </div>
        )
    }
}

export default App;
