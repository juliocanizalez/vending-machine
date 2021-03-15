import React from 'react';

import '../assets/styles/components/ItemsDispenser.scss';
const ItemsDispenser = (props) => {

    return (
        <div className="container items-container">
            <div className='row align-items-center justify-content-center'>
                <div className="col-md-5 shadow food-container">
                    <div className="section-title">
                        <p className="text-center">Food Available</p>
                    </div>
                    <div className="food-items">{props.foodList}</div>
                </div>
                <div className="col-md-5 shadow food-container">
                    <div className="food-items">
                        <div className="section-title">
                            <p className="text-center">In process</p>
                        </div>
                        <div className="messages">{props.foodInProcess}</div>
                        <div className="section-title">
                            <p className="text-center">Dispatched</p>
                        </div>
                        <div className="messages">{props.foodDispatched}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemsDispenser;
