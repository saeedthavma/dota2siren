import React from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import './playerList.css';

const PlayerList = () => {
    return (
        <div>

            <Header />
            <img className='header-img-ta' src='/photo/images/header-img-ta.jpg' />

            <div className="playerlist-bg"></div>

            <div className='playerlist-area'>

            </div>

            <Footer />

        </div>
    )
};

export default PlayerList;