import React from 'react';
import PhotoCarousel from './PhotoCarousel.jsx';

class PhotoCarouselList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendations: props.recommendations
        }
    }
    render() {
        return (
            <div>
                {this.state.recommendations.map( (recommendation, i) => 
                    <PhotoCarousel recommendation={recommendation} key={i}/>)}
            </div>
        )
    }
}

export default PhotoCarouselList;