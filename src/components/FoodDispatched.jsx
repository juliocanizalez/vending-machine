import React from 'react';

const FoodDispatched = ({iconUrl, name}) => {
    return (
        <div className="row justify-content-center align-items-center foods-container">
            <div className="col-1">
                <img className="food-icon" src={iconUrl} alt={name} />
            </div>
            <div className="col-6">
                <p className="food-text">{name}</p>
            </div>
            <div className="col-1">
                <p className="food-time">Served</p>
            </div>
        </div>
    );
}

export default FoodDispatched;
