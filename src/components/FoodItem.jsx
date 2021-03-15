import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/FoodItem.scss';

const FoodItem = ({ name, timeInSeconds, iconUrl }) => {

    const secs = new Date(`March 15, 2021 ${timeInSeconds}`).getSeconds();

    return (

        <div className="row justify-content-center align-items-center foods-container">
            <div className="col-1">
                <img className="food-icon" src={iconUrl} alt={name} />
            </div>
            <div className="col-6">
                <p className="food-text">{name}</p>
            </div>
            <div className="col-1">
                <p className="food-time">{`${secs}s`}</p>
            </div>
            <div className="col-3">
                <button className="btn btn-sm food-button">Prepare</button>
            </div>
        </div>

    );
}

//Add validation for incoming data
FoodItem.propTypes = {
    name: PropTypes.string,
    timeInSeconds: PropTypes.string,
    iconUrl: PropTypes.string
}

export default FoodItem;
