import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ItemsDispenser from '../components/ItemsDispenser.jsx';
import FoodInProcess from '../components/FoodInProcess.jsx';
import FoodDispatched from '../components/FoodDispatched.jsx';
import FoodItem from '../components/FoodItem.jsx';
import useInitialState from '../hooks/useInitialState.js';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/items';

const App = () => {

    const initialState = useInitialState(API);

    return (
        <div className='App'>
            <Header />
            <ItemsDispenser
                foodList = {
                    initialState.map(item => (<FoodItem key={item.id} {...item} />))
                }
                foodInProcess = {
                    <FoodInProcess/>
                }
                foodDispatched = {
                    <FoodDispatched />
                }
            />
            <Footer />
        </div>
    );
}

export default App;
