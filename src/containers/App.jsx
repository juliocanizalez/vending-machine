import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ItemsDispenser from '../components/ItemsDispenser.jsx';

import '../assets/styles/App.scss';

const App = () => {
    return (
        <div className='App'>
            <Header />
            <ItemsDispenser />
            <Footer />
        </div>
    );
}

export default App;
