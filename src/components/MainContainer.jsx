import React from 'react';

const MainContainer = ({ children }) => {
    return (
        <div className='container justify-content-center align-items-center'>
            {children}
        </div>
    );
}

export default MainContainer;
