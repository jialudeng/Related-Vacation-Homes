import React from 'react';

class RecommendationListEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendation: props.recommendation
        }
    }
    render() {
        return (
            <div>
                {this.state.recommendation.images.map((image) => 
                    <img src={image} className="img" alt="..."/>)}
            </div>
        )
    }

}

export default RecommendationListEntry;