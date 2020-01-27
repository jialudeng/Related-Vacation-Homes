import React from 'react';

const Arrow = ({direction, clickFunction, graphic}) => {
    return (
        <div className={`slide-arrow ${direction}`}>
            <button className ="button" onClick={clickFunction}> 
                {graphic} 
            </button>
        </div>
    )
}

export default Arrow;