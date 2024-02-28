import React, { useEffect, useState } from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import ProfileInfo from './profile_info/ProfileInfo.jsx';
import HostTournament from './host_tournament/HostTournament.jsx';
import './userPanel.css';

const UserPanel = () => {

    return (
        <div className='userpanel-bg'>

            <Header />
            <img className='header-img-wr' src='/photo/images/header-img-wr.jpg' />

            <div className="userpanel-area">

                <div className='userpanel-content-bg'></div>

                <ul className="userpanel-panel">
                    <li>اطلاعات من</li>
                    <li>میزبانی تورنمنت ها</li>
                    <li>شرکت در تورنمنت ها</li>
                </ul>

                <div className="userpanel-content">
                    <HostTournament />
                </div>

            </div>

            <Footer />

        </div>
    );
}

export default UserPanel;
