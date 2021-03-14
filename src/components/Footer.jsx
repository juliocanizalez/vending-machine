import React from 'react';

import '../assets/styles/components/Footer.scss';

const Footer = () => {
    let date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p className="text-center footer-text">&#169; {year} Made by Julio Canizalez</p>
        </footer>
    );
}

export default Footer;
