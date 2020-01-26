import React from 'react';
// import axios from 'axios';
import RecommendationList from './RecommendationList.jsx';
import dummyData from '../../dummyData.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: dummyData
        }
    }
    // Need to know how to send a get request for a specific listing so when type localhost:3003/listing/3, send a get request for the listing with a listingId of 3 
    // componentDidMount() {
    //     axios.get('./listings')
    //         .then((response) => {
    //             var listingsArr = response.data
    //             // this.setState({
    //             //     listings: listingsArr
    //             // }) 
    //             console.log(listingsArr);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    render() {
        return (
            <div id="main-content">
                <RecommendationList recommendations={this.state.listings[0].recommendations}/>
            </div>
        )
    }
}

export default App;
