import React from 'react';
import RecommendationListEntry from './RecommendationListEntry.jsx';

var RecommendationList = ({recommendations}) => {
    return (
        <div>
            {recommendations.map( (recommendation, i) => 
                <RecommendationListEntry recommendation={recommendation} key={i}/>)}
        </div>
    )
}

export default RecommendationList;